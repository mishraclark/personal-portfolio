import LinkedinIcon from "~/assets/linkedin-logo.svg?react";
import GithubIcon from "~/assets/github-logo.svg?react";
import TwitterIcon from "~/assets/twitter-logo.svg?react";

export default function Footer() {
  return (
    <div className="flex text-white pt-10 max-md:justify-between gap-x-24  md:justify-center ">
      <a
        href="https://www.linkedin.com/in/mishra-clark-6aa8b8226/"
        target="_blank"
        rel="noopener"
      >
        <LinkedinIcon className="size-10 hover:opacity-100 opacity-70 cursor-pointer" />
      </a>
      <a href="https://github.com/mishraclark/" target="_blank" rel="noopener">
        <GithubIcon className="size-10 hover:opacity-100 opacity-70 cursor-pointer" />
      </a>
      <a href="https://x.com/meesh6_6/" target="_blank" rel="noopener">
        <TwitterIcon className="size-10 hover:opacity-100 opacity-70 cursor-pointer" />
      </a>
    </div>
  );
}
