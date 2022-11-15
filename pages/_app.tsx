import "../styles/globals.css";

import type { AppType } from "next/app";

import { Layout } from "../components/Layout";
import Navbar from "components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-800  z-10">
      <Layout>
        <Navbar />
        <div className="flex justify-center px-4 py-6">
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
};

export default MyApp;
