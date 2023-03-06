import Hamburber from "../Hamburger";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center p-6 lg:p-8 text-4xl font-mont bg-slate-800">
      <Hamburber />
      <div className="LARGE NAV hidden lg:flex flex-1">
        <Link
          href={"/"}
          className="flex flex-row items-center cursor-pointer group hover:-mb-px"
        >
          <span className="material-symbols-outlined material-icons md-36 text-teal-600 group-hover:animate-pulse group-hover:mb-px">
            flash_on
          </span>
          <p className="text-white font-extrabold group-hover:border-b-2  group-hover:border-teal-600 group-hover:-mb-px">
            DM
          </p>
        </Link>
        <div className="flex ml-auto gap-12">
          <Link href={"/portfolio"}>
            <p className="text-white cursor-pointer font-extralight hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              Portfolio
            </p>
          </Link>
          <Link href={"/skills"}>
            <p className="text-white cursor-pointer font-extralight hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              Skills
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-white cursor-pointer font-extralight hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
