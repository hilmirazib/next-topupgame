import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
interface MenuItemProps {
  title: string;
  icon: 'ic-overview' | 'ic-messages' | 'ic-rewards' | 'ic-card' | 'ic-log-out' | 'ic-settings' | 'ic-transactions';
  active?: boolean;
  altr: string;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, altr, href, active } = props;
  const classActive = cn({
    item: true,
    'mb-30': true,
    active: active,
  });
  return (
    <div className={classActive}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={altr} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}