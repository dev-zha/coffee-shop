interface LabelValueRowProps {
  lable: string;
  value: string;
}
export default function LabelValueRow({ lable, value }: LabelValueRowProps) {
  return (
   <div className="flex justify-between gap-2 text-neutral-800 my-1">
      <p className="text-left font-normal">{lable}</p>
      <p className="w-1/2 text-right font-semibold">{value}</p>
    </div>
  );
}
