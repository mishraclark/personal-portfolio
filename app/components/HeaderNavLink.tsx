export default function HeaderNavLink(props: {to: string, title: string, icon: string}) {
    const scrollToId = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div onClick={() => scrollToId(props.to)} className="cursor-pointer">
          <div className="flex flex-col items-center gap-y-1 hover:opacity-100 opacity-70 cursor-pointer">
              <img src={props.icon} className="size-10" />
              <span className="max-sm:hidden">
                {props.title}
              </span>
          </div>
      </div>
    );
}