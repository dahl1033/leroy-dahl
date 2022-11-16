import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

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

const Navbar = () => {
  return (
    // <div className="flex justify-between items-center ">
    <Popover className={`pt-6 px-4`}>
      {({ open }) => (
        <>
          {open ? (
            <nav className="flex justify-between">
              <Link href="/">{Logo}</Link>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel static>
                  <ul className=" gap-x-12 flex flex-col">
                    <Popover.Button>
                      <li>
                        <Link className="flex " href="/about">
                          <div className="pr-1 text-sm text-green-600 font-mono">
                            01.
                          </div>
                          <div className="text-sm text-gray-400 underline">
                            About
                          </div>
                        </Link>
                      </li>
                    </Popover.Button>
                    <Popover.Button>
                      <li>
                        <Link className="flex" href="/experience">
                          <div className="pr-1 text-sm text-green-600 font-mono">
                            02.
                          </div>
                          <div className="text-sm text-gray-400">
                            Experience
                          </div>
                        </Link>
                      </li>
                    </Popover.Button>
                    <Popover.Button>
                      <li>
                        <Link className="flex" href="/contact">
                          <div className="pr-1 text-sm text-green-600 font-mono">
                            03.
                          </div>
                          <div className="text-sm text-gray-400">Contact</div>
                        </Link>
                      </li>
                    </Popover.Button>
                  </ul>
                </Popover.Panel>
              </Transition>
            </nav>
          ) : (
            <nav className="flex justify-between sm:px-6 md:px-6 lg:px-20">
              <Link href="/">{Logo}</Link>
              <Popover.Button className={`pr-4 sm:hidden`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#A1A1AA"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#A1A1AA"
                  className={`w-10 h-10`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Popover.Button>
              <ul className="hidden gap-x-12 sm:flex">
                <li>
                  <Link className="flex" href="/about">
                    <div className="pr-1 text-sm text-green-600 font-mono">
                      01.
                    </div>
                    <div className="text-sm text-gray-400">About</div>
                  </Link>
                </li>
                <li>
                  <Link className="flex" href="/experience">
                    <div className="pr-1 text-sm text-green-600 font-mono">
                      02.
                    </div>
                    <div className="text-sm text-gray-400">Experience</div>
                  </Link>
                </li>
                <li>
                  <Link className="flex" href="/contact">
                    <div className="pr-1 text-sm text-green-600 font-mono">
                      03.
                    </div>
                    <div className="text-sm text-gray-400">Contact</div>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </Popover>
    // </div>
  );
};

export default Navbar;

// : (
// <nav>
//   <Link href="/">{Logo}</Link>
<ul className="hidden gap-x-12 sm:flex">
  <li>
    <Link className="flex" href="/about">
      <div className="pr-1 text-sm text-green-600 font-mono">01.</div>
      <div className="text-sm text-gray-400">About</div>
    </Link>
  </li>
  <li>
    <Link className="flex" href="/experience">
      <div className="pr-1 text-sm text-green-600 font-mono">02.</div>
      <div className="text-sm text-gray-400">Experience</div>
    </Link>
  </li>
  <li>
    <Link className="flex" href="/contact">
      <div className="pr-1 text-sm text-green-600 font-mono">03.</div>
      <div className="text-sm text-gray-400">Contact</div>
    </Link>
  </li>
</ul>;
// </nav>
//               )
