export default function Contact(props: { onOpenDialog: () => void }) {
  return (
    <div
      id="contact"
      className="flex flex-col mt-40 lg:mt-[100px] py-20 px-10 items-center text-center"
    >
      <div className="flex flex-col items-center justify-center text-white max-w-120">
        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-10">
          Want to Chat?
        </h1>

        <div className="text-zinc-400 md:text-lg">
          I'm always open to discussing new projects, collaborations, or just
          tech in general. Drop me a message—I'd love to hear from you!
        </div>

        <button
          type="button"
          className="pointer-events-auto cursor-pointer mt-10 px-10 py-4 text-lg text-amber-200 border-amber-200 border rounded-xl"
          onClick={props.onOpenDialog}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}
