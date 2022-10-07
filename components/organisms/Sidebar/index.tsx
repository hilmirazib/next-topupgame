import { useRouter } from 'next/router';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';
import Cookies from 'js-cookie';
interface SidebarProps {
  active: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(props: SidebarProps) {
  const { active } = props;
  const router = useRouter();

  const onLogOut = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-overview" altr="Icon Overview" active={active === 'overview'} href="/member" />
          <MenuItem
            title="Transactions"
            icon="ic-transactions"
            altr="Icon Transactions"
            active={active === 'transactions'}
            href="/member/transactions"
          />
          {/* <MenuItem title="Messages" icon="ic-messages" altr="Icon Messages" href="/member" /> */}
          {/* <MenuItem title="Card" icon="ic-card" altr="Icon Card" href="/member" /> */}
          {/* <MenuItem title="Rewards" icon="ic-rewards" altr="Icon Rewards" href="/member" /> */}
          <MenuItem title="Settings" icon="ic-settings" altr="Icon Settings" active={active === 'settings'} href="/member/edit-profile" />
          <MenuItem title="Log Out" icon="ic-log-out" onClick={onLogOut} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
