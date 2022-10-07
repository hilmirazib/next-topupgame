import jwtDecode from 'jwt-decode';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../serviceAPI/data-type';

function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar active="overview" />
      <OverviewContent />
    </section>
  );
}

export default Member;
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii'); //sama seperti fungsi atob di client side
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userPayload.avatar = `${IMG}/${userPayload.avatar}`;
  return {
    props: {
      user: userPayload,
    },
  };
}
