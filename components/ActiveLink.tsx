import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      className={`flex ${
        router.asPath === href ? "text-green-600" : "text-black"
      }`}
      href={href}
    >
      <div
        className={`text-sm ${
          router.asPath === href ? "dark:text-green-600" : "text-black"
        } dark:text-white`}
      >
        {children}
      </div>
    </Link>
  );
};

export default ActiveLink;
