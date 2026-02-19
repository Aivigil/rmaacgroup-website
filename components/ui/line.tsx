interface LineProps {
  width?: string;
  color?: string;
  className?: string;
}

export default function Line({
  width = "w-16",
  color = "bg-gray-500",
  className,
}: LineProps) {
  return <div className={`${width} h-px ${color} ${className}`}></div>;
}
