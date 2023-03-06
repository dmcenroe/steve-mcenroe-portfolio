import VideoPlayer from "./VideoPlayer";
export default function MythicPlus() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 lg:gap-20 font-mont text-slate-800 p-8 lg:flex-row justify-center">
      <VideoPlayer videoSource={"/videos/Mythx.mov"} project={"mythic-plus"} />

      <div className="flex flex-col w-full lg:w-1/2 gap-4 items-center lg:items-start">
        <div>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="text-6xl mr-4 tracking-tighter">Mythx</p>

            <div className="flex flex-row gap-1">
              <a
                href="https://mythic-plus-leaderboard.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                title="Fischer"
                className="bg-slate-800 h-10 w-10 rounded-full flex items-center justify-center hover:bg-teal-600"
              >
                <span className="pointer-events-none material-symbols-outlined text-white">
                  language
                </span>
              </a>

              <a
                href="https://github.com/dmcenroe/BlizzAPI---M-Leaderboard"
                target="_blank"
                rel="noreferrer noopener"
                title="github"
              >
                <svg
                  viewBox="0 0 100 100"
                  width={40}
                  height={40}
                  className="fill-slate-800 hover:fill-teal-600"
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
              </a>
            </div>
          </div>
          <p className="text-lg text-center font-light italic lg:text-left">
            Weekly M+ Leaderboards using Blizzard APIs
          </p>
        </div>
        <div className="TECHS-USED grid grid-cols-3 w-max gap-x-3 gap-y-2">
          <div className=" text-black bg-gray-100 rounded-lg flex items-center justify-center px-7 h-6 border border-black">
            Next.js
          </div>
          <div className=" text-blue-700 bg-blue-100 rounded-lg flex items-center justify-center h-6 border border-blue-700">
            Typescript
          </div>
          <div className=" text-yellow-600 bg-yellow-100 rounded-lg flex items-center justify-center h-6 border border-yellow-600">
            Blizzard API
          </div>
          <div className=" text-orange-600 bg-orange-100 text-sm rounded-lg flex items-center justify-center h-6 border border-orange-600">
            Victory Charts
          </div>
          <div className=" text-purple-600 bg-purple-100 rounded-lg flex items-center justify-center h-6 border border-purple-600">
            Redux
          </div>
          <div className=" text-sky-700 bg-sky-100  rounded-lg flex items-center justify-center h-6 border border-sky-700">
            Tailwind
          </div>
        </div>

        <p className="text-xl font-extralight mt-4 lg:mt-8">
          Mythx makes use of Blizzard APIs to obtain an manipulate live World of
          Warcraft player data. The top 500 dungeon runs per realm are displayed
          each week, and may be filtered by realm or dungeon. Each player in a
          run may be clicked on to visit their personal player page, showing
          their overall top run per dungeon.
        </p>
        <p className="text-xl font-extralight">
          Digging deeper, users are able to search for specific characters, or
          they can leverage the analytics feature, displaying a chart of
          character class specialization popularity per dungeon and realm.
        </p>
      </div>
    </section>
  );
}
