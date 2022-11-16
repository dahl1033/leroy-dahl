import { Inter } from "@next/font/google";
import classNames from "classnames";
import Head from "next/head";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>LeRoy Dahl</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={classNames(
          "mx-auto min-h-screen overflow-hidden",
          inter.className
        )}
      >
        {children}
      </main>
    </>
  );
};
