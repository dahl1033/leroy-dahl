import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

const Logo = (
  <svg
    width="45"
    height="55"
    viewBox="0 0 45 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2017 36V17.8182H19.4034V34.0469H27.8551V36H17.2017Z"
      fill="#16A34A"
    />
    <path
      d="M22.5 1.17208L44 14.3163L44 40.6837L22.5 53.8279L1 40.6837L1 14.3163L22.5 1.17208Z"
      stroke="#16A34A"
      strokeWidth="2"
    />
  </svg>
);

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [route, setRoute] = useState<string>("");

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // console.log("route: ", route);
      // setRoute(url);
      // console.log("route: ", route);
      // console.log("route: ", route);
      // console.log("router.pathname: ", router.pathname);
      // console.log("url: ", url);
      // console.log("router.events: ", router);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <nav className="hidden sm:flex justify-center shadow-md w-fit border rounded-full h-10 items-center px-6">
        <ul className="hidden gap-x-12 sm:flex">
          <li>
            <ActiveLink children={"About"} href="/about" />
          </li>
          <li>
            <ActiveLink children={"Experience"} href="/experience" />
          </li>
          <li>
            <ActiveLink children={"Contact"} href="/contact" />
          </li>
        </ul>
      </nav>
      <div className="sm:hidden flex justify-center shadow-md w-fit border rounded-full h-10 items-center px-5">
        <Menu>
          <Menu.Button className={`flex justify-center items-center gap-2`}>
            Menu
            <ChevronDown />
          </Menu.Button>
          <Menu.Items
            className={`absolute top-20 bg-white p-6 rounded-md shadow-inner w-1/2`}
          >
            <div className="">
              <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <ActiveLink children={"About"} href="/about" />
                  </div>
                )}
              </Menu.Item>
            </div>
            <Menu.Item>
              {({ close }) => (
                <div onClick={close}>
                  <ActiveLink children={"Experience"} href="/experience" />
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ close }) => (
                <div onClick={close}>
                  <ActiveLink children={"Contact"} href="/contact" />
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
