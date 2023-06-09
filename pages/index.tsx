import { FormEventHandler, useEffect, useRef, useState } from "react";

import { Dialog } from "@headlessui/react";
import Disclosure from "../components/Disclosure";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 -ml-6 stroke-gray-800 dark:stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
};

const CloseErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ClearInputIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 stroke-gray-800 dark:stroke-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const Home: NextPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState("");
  const [isClearing, setIsClearing] = useState(false);
  const [secret, setSecret] = useState("password");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const word = (document.getElementById("passwordInput") as HTMLInputElement)
      .value;
    validatePassword(word);
  };

  const clearInput = () => {
    (document.getElementById("passwordInput") as HTMLInputElement).value = "";
    setIsClearing(false);
  };

  const validatePassword = (word: string) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (word === secret) {
      router.push("/about");
    } else if (word?.match(/[A-Z]/)) {
      setError("Password cannot contain uppercase letters");
    } else if (/\d/.test(word)) {
      setError("Password cannot contain numbers");
    } else if (specialChars.test(word)) {
      setError("Password cannot contain special characters");
    } else if (word.length < 4) {
      setError("Password is a way too short");
    } else if (word.length < 8) {
      setError("Password is a little too short");
    } else if (word.length > 8) {
      setError("Password is a little too long");
    } else if (word.length > 12) {
      setError("Password is a way too long");
    } else {
      setError("Way easier than you think...");
    }
    setIsClearing(true);
  };
  // useEffect(() => {
  //   console.log("Error: ", error);
  // }, [error]);

  const handleSolve = (password: string) => {
    setError("");
    setIsClearing(false);
    let input = document.getElementById("passwordInput") as HTMLInputElement;
    input.value = "";
    for (let i = 0; i < password.length; i++) {
      setTimeout(() => {
        input.value += password[i];
      }, 500 * i);
    }
    setTimeout(() => {
      validatePassword(password);
    }, 500 * password.length + 1000);
  };
  return (
    <>
      <Dialog
        className="absolute top-0 bottom-0 right-0 left-0 h-screen w-screen flex justify-center items-center bg-white dark:bg-gray-800"
        open={isOpen}
        onClose={() => setIsOpen(true)}
      >
        <Dialog.Panel>
          <div className="flex flex-col md:flex-row ">
            <img
              src="/finger-drawing-removebg-preview.png"
              alt="hero"
              className="md:w-1/2 w-full h-auto"
            />
            <div className="md:flex md:flex-col md:justify-center mt-8">
              <form
                id="passwordForm"
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <label className="text-4xl font-bold text-gray-800 md:mb-16 mb-8 gap-2 dark:text-white">
                  - Checkout my work!
                </label>
                <div className="w-2/3">
                  <div className="flex w-auto">
                    <input
                      id="passwordInput"
                      type="text"
                      className="w-full border-b-2 border-gr focus:outline-none dark:bg-transparent dark:boder-white dark:text-white"
                      placeholder="Guess the password"
                      onChange={() => setIsClearing(false)}
                    />
                    {isClearing ? (
                      <div className="-ml-6" onClick={clearInput}>
                        <ClearInputIcon />
                      </div>
                    ) : (
                      <div className="dark:stroke-white" onClick={handleSubmit}>
                        <ArrowRight />
                      </div>
                    )}
                  </div>
                  {error !== "" && (
                    <div
                      onClick={() => setError("")}
                      className="flex justify-between text-sm text-red-500"
                    >
                      {error}
                      <CloseErrorIcon />
                    </div>
                  )}
                </div>
                <div
                  className="w-auto h-12 bg-gray-800 text-white dark:bg-white dark:text-gray-800  flex justify-center items-center mt-16 rounded-sm cursor-pointer px-6"
                  onClick={() => handleSolve(secret)}
                >
                  Solve for me
                </div>
              </form>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Disclosure />
    </>
  );
};

export default Home;
