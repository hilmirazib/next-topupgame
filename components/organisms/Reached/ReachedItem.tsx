import cn from 'classnames';
interface ReachedItemProps {
  title: string;
  desc: string;
  active?: boolean;
}
export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const { title, active, desc } = props;
  const classLg = cn({
    'me-lg-35': true,
    'me-lg-35 ms-lg-35': active,
  });
  return (
    <div className={classLg}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </div>
  );
}
