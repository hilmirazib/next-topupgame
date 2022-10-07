import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { updateProfile } from '../../serviceAPI/member';
import Image from 'next/image';
import { JWTPayloadTypes, UserTypes } from '../../serviceAPI/data-type';

interface UserStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any;
  phoneNumber: string;
}

export default function EditProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    id: '',
    name: '',
    email: '',
    avatar: '',
    phoneNumber: '',
  });
  const [imagePreview, setImagePreview] = useState('/');
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append('image', user.avatar);
    data.append('name', user.name);
    data.append('phoneNumber', user.phoneNumber);
    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Update profile berhasil!');
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  {imagePreview == '/' ? (
                    <img src={`${IMG}/${user.avatar}`} width="90" height="90" className="avatar img-fluid" />
                  ) : (
                    <img src={imagePreview} alt="icon upload" width={90} height={90} style={{ borderRadius: '100%' }} />
                  )}
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image src="/icon/trash.svg" height={24} width={24} alt="Upload" />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image src="/icon/upload.svg" height={90} width={90} alt="Upload" />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event: { target: { files: any } }) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(event: { target: { value: any } }) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone"
                  value={user.phoneNumber}
                  onChange={(event: { target: { value: any } }) =>
                    setUser({
                      ...user,
                      phoneNumber: event.target.value,
                    })
                  }
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill" onClick={onSubmit}>
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
