export default function SkillListItem(props: {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="text-white justify-center flex items-center bg-slate-900 border border-slate-700 rounded-lg shadow-lg py-1 px-2 gap-x-1">
      <props.icon className="size-8" />

      <div className="opacity-70">{props.title}</div>
    </div>
  );
}
