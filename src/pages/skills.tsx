export default function Skills() {
  return (
    <>
      <h1 className="text-6xl lg:text-8xl font-mont tracking-tighter font-bold text-slate-800 m-auto my-8">
        Skills
      </h1>
      <div className="flex flex-1 flex-col font-mont pb-8  justify-center">
        <div className="flex flex-col gap-20 relative ">
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col gap-1 items-end w-full tracking-widest">
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                React
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                Next.js
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                Redux
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                Javascript
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                Typescript
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                Tailwind
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                CSS
              </div>
            </div>
            <div className="flex flex-col text-4xl w-full lg:text-4xl font-bold justify-center items-start">
              <div className="w-3/4 md:w-1/3 flex flex-col lg:flex-row lg:justify-start items-center lg:ml-12">
                <span className="material-symbols-outlined material-icons md-48 text-teal-600">
                  devices
                </span>
                <p className="lg:ml-4 text-slate-800 tracking-tighter text-center lg:text-left">
                  Front End
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-2 absolute right-1/2 transform translate-x-1/2">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 0 screen"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full"
            >
              <line x1="3" y1="0" x2="3" y2="1000" stroke="black" />
            </svg>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col text-4xl w-full lg:text-4xl font-bold justify-center items-end">
              <div className="w-3/4 md:w-1/3 flex flex-col-reverse lg:flex-row lg:justify-end items-center lg:mr-12">
                <p className="lg:mr-4 text-slate-800 tracking-tighter text-center lg:text-right">
                  Back End
                </p>
                <span className="material-symbols-outlined material-icons md-48 text-teal-600">
                  database
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full tracking-widest">
              <div
                className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48
             hover:bg-teal-500"
              >
                Next.js
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                PostgreSQL
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                Supabase
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                Prisma
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                Sequelize
              </div>
              <div className=" text-white bg-slate-800 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-slate-700">
                Express
              </div>
              <div className=" text-white bg-teal-600 text-xl lg:text-2xl rounded-sm flex items-center justify-start pl-2 h-10 w-36 lg:w-48 hover:bg-teal-500">
                Axios
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
