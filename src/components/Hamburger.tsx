import Link from "next/link";
import { useState } from "react";

export default function Hamburber() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center font-mont justify-between w-full lg:hidden">
      <section className="MOBILE-MENU flex w-full lg:hidden">
        <div
          className="HAMBURGER-ICON flex flex-col gap-2 justify-center"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-teal-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-teal-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-teal-600"></span>
        </div>
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white ml-auto flex flex-row items-center"
        >
          <span className="material-symbols-outlined material-icons md-24 text-teal-600 group-hover:animate-pulse group-hover:mb-px">
            flash_on
          </span>
          <p>DM</p>
        </Link>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b-2 border-teal-600 my-8 uppercase">
              <Link onClick={() => setIsNavOpen(false)} href="/">
                Home
              </Link>
            </li>
            <li className="border-b-2 border-teal-600 my-8 uppercase">
              <Link onClick={() => setIsNavOpen(false)} href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="border-b-2 border-teal-600 my-8 uppercase">
              <Link onClick={() => setIsNavOpen(false)} href="/skills">
                Skills
              </Link>
            </li>
            <li className="border-b-2 border-teal-600 my-8 uppercase">
              <Link onClick={() => setIsNavOpen(false)} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
  .hideMenuNav {
    display: none;
  }
  .showMenuNav {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`}</style>
    </div>
  );
}
