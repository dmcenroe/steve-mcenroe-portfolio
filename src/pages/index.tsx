import Head from "next/head";
import Image from "next/image";
import Xarrow from "react-xarrows";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve McEnroe's Portfolio</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 items-center justify-center relative">
        <div className="flex flex-col-reverse mt-12 gap-20 items-center pb-8 lg:flex-row lg:mt-0 lg:pb-0 lg:px-8">
          <div className="w-full text-center flex flex-col items-center px-5 lg:block lg:text-left">
            <div className="flex gap-4">
              <div className="relative font-mont font-extrabold text-3xl text-teal-600 w-max rounded-xl px-5 py-2 bg-slate-800 mb-8">
                CISA
              </div>
              <div className="relative font-mont font-extrabold text-3xl text-teal-600 w-max rounded-xl px-5 py-2 bg-slate-800 mb-8">
                HITRUST CCSFP
              </div>
              <div className="relative font-mont font-extrabold text-3xl text-teal-600 w-max rounded-xl px-5 py-2 bg-slate-800 mb-8">
                GPEN
              </div>
            </div>

            <p className="text-slate-800 font-mont font-light text-4xl mb-4">
              <span>{"I'm "}</span>
              <span className="font-bold">{"Steve McEnroe, "}</span>
              <span className="text-3xl italic">
                an experienced Information Security & Complainace Professional.
              </span>
            </p>

            <div className="flex flex-col gap-4">
              <p className="testDiv text-slate-800 font-mont font-md text-lg">
                {
                  "I have a passion for identifying and mitigating risks to help businesses operate safely and securely. I thrive on collaborating with stakeholders to ensure that their Information Security Management Programs are aligned with best practices and industry frameworks."
                }
              </p>

              <p className="testDiv text-slate-800 font-mont font-md text-lg">
                {
                  "With over 20 years of experience in information technology, information security testing, audit, and compliance, I have the technical skills and strategic mindset to help companies achieve their GRC goals."
                }
              </p>
            </div>

            <div className="flex flex-row gap-4 mt-8">
              {/* <a
                href="https://github.com/dmcenroe"
                target="_blank"
                rel="noreferrer noopener"
                title="github"
              >
                <svg
                  width={98}
                  height={96}
                  className="fill-slate-800 hover:fill-teal-600"
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
              </a> */}
              <a
                href="https://www.linkedin.com/in/stevemcenroe/"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-slate-800 rounded-full text-white fill-white hover:bg-teal-600"
                title="LinkedIn"
              >
                <svg viewBox="0 0 512 512" width={100} height={100}>
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="h-3/4 w-0 border-r-slate-800 border-l-transparent border-y-transparent border-2 absolute left-1/2 transform -translate-x-1/2 hidden lg:block"></div>
          <div className="w-full h-full text-center items-center flex justify-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <Image
                id="picture"
                className="grayscale rounded-full"
                src="/images/steve_headshot_2.png"
                alt="Picture of Derek McEnroe"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
