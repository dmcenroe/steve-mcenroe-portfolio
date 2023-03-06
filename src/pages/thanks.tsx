import Link from "next/link";

export default function Thanks() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center border border-red-400">
      <div className="bg-slate-800 flex flex-col h-96 w-3/4 p-6 lg:p-0 text-center lg:w-1/2 items-center justify-center rounded-lg text-white gap-4 drop-shadow-xl border border-green-600">
        <span className="material-symbols-outlined material-icons md-96 text-teal-600 group-hover:animate-pulse group-hover:mb-px">
          check_circle
        </span>
        <div className="flex flex-col items-center gap-1">
          <p className="text-5xl font-mont font-bold">Hey, thanks!</p>
          <p className="text-xl lg:text-2xl font-mont font-thin">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Link
          href="/"
          className="font-mont underline underline-offset-8 mt-4 hover:text-teal-600"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
