interface RowProps {
  label: string;
  value: string | number;
  ClassName?: string;
}
export default function Row(props: Partial<RowProps>) {
  const { label, value, ClassName } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${ClassName}`}>{value}</span>
    </p>
  );
}
