import "../styles/globals.css";

import type { AppType } from "next/app";

import { Layout } from "../components/Layout";
import Navbar from "components/Navbar";

const LightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 dark:stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const handleThemeChange = () => {
    const html = document.querySelector("html");
    if (html?.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  };
  return (
    <div className="bg-neutral-100 dark:bg-slate-700">
      <Layout>
        <div className="flex justify-center h-full flex-col max-w-6xl bg-white dark:bg-slate-800">
          <div className="w-full flex justify-end ">
            <div className="flex sm:grid sm:grid-cols-3 p-6">
              <div className="hidden sm:flex" />
              <div className="flex justify-center mr-6 sm:mr-0">
                <Navbar />
              </div>

              <div className="w-full flex sm:justify-end">
                <div
                  onClick={handleThemeChange}
                  className="border rounded-full shadow-lg flex justify-center items-center z-10 w-12 h-10"
                >
                  <LightIcon />
                </div>
              </div>
            </div>
          </div>
          <Component {...pageProps} />
          <div className="flex h-96 w-full mt-8 bg-gray-200 dark:bg-slate-900 ">
            <div className="flex flex-col mt-8 -px-8">
              <h1 className="text-4xl font-bold text-black md:mb-1 mt-6 dark:text-white sm:leading-tight">
                {`This is copy This is copy This is copy This is copy This is copy This is copy This is copy This is copy `}
              </h1>
              <h3 className="text-sm text-gray-500 mt-6">{`This is copy This is copy This is copy This is copy This is copy This is copy This is copy This is copyThis is copy`}</h3>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyApp;
