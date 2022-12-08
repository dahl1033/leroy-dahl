import "../styles/globals.css";

import type { AppType } from "next/app";

import { Layout } from "../components/Layout";
import Navbar from "components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-neutral-100  z-10">
      <Layout>
        <div className="flex justify-center flex-col max-w-5xl bg-white">
          <div className="w-full flex justify-center p-6">
            <Navbar />
          </div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
};

export default MyApp;
