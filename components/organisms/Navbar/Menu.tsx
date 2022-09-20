import cn from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;
  const classTitle = cn({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
