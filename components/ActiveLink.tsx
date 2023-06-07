import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href }: { children: string; href: string }) => {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };
  useEffect(() => {
    console.log(router.asPath);
  }, [router.asPath]);

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      className={`flex ${router.asPath === href ? "bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text font-bold" : "text-black"
        }`}
      href={href}
    >
      <div
        className={`text-sm ${router.asPath === href ? "dark:bg-gradient-to-r dark:from-blue-500 dark:to-pink-500 dark:text-transparent dark:bg-clip-text dark:font-bold" : "text-black"
          } dark:text-white`}
      >
        {children}
      </div>
    </Link>
  );
};

export default ActiveLink;
