import cn from 'classnames';
interface ButtonTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { active, title, onClick } = props;
  const buttonClass = cn({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
}
