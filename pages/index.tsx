import Navbar from "components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="max-w-3xl flex flex-col ">
      <div className="text-sm text-green-600 font-mono mb-8">
        Hi, my name is
      </div>
      <h1 className="text-7xl font-bold text-gray-50 mb-8">LeRoy Dahl</h1>
      <h1 className="text-7xl font-bold text-gray-400 mb-8">
        I build things for the web.
      </h1>
      <h3 className="text-sm text-gray-500">{`I'm a software engineer based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`}</h3>
      <Link
        className="px-6 py-3 border text-green-600 border-green-600 w-fit rounded-md mt-16"
        href="/life"
      >
        Check out my Life!
      </Link>
    </div>
  );
};

export default Home;
