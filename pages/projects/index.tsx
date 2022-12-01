import { Disclosure, Transition } from "@headlessui/react";
import CardModal from "components/CardModal";
import HousingFirst from "../../public/housingfirst.png";

const getBrandStyle = () => {
  const random = Math.floor(Math.random() * 5);
  console.log(random);
  const availableStyles = [
    {
      text: "text-violet-500",
      bg: "bg-violet-100",
    },
    {
      text: "text-denim-500",
      bg: "bg-blue-100",
    },
    {
      text: "text-aqua-500",
      bg: "bg-stone-100",
    },
    {
      text: "text-meadow-500",
      bg: "bg-yellow-200",
    },
    {
      text: "text-marigold-500",
      bg: "bg-red-100",
    },
  ];
  return availableStyles[random].bg;
};

const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="white"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="white"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

interface Card {
  id: number;
  background: string;
  title: string;
  description: string;
  image: string;
  imageStyle: string;
  toolDescription: string;
  keyPoints: { id: number; text: string }[];
}
const cards: Card[] = [
  {
    id: 1,
    background: "bg-violet-100",
    title: "Housing First Minnesota",
    toolDescription: "React, Ruby, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/housingfirst.png",
    imageStyle: "h-40",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
      {
        id: 3,
        text: "Handled instant bank verification and updated HFMN user profiles with their default payment source(s)",
      },
      {
        id: 4,
        text: "Handled delayed payments using stripes webhook events, micro deposits can take several days to complete",
      },
    ],
  },
  {
    id: 2,
    background: "bg-emerald-100",
    title: "Huge Improv Theater",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/hugetheater.svg",
    imageStyle: "h-28",
    keyPoints: [
      {
        id: 1,
        text: "Complete redesign of clients website",
      },
      {
        id: 2,
        text: "Automated their class signup process",
      },
      {
        id: 3,
        text: "Built Backend Architecture for relating Classes, Shows, Jams, and their Blog. Completely customizable by admin users of HUGE Improv to upload their own content and maintain their site without the need of a developer.",
      },
      {
        id: 4,
        text: "Integrated Stipe to handle credit card processing to pay for classes. Setup webhooks to update events, handle payment statuses, and refunds native to their site instead of in Stripes dashboard",
      },
    ],
  },
  {
    id: 3,
    background: "bg-gray-200",
    title: "Purina Health",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/purina.png",
    imageStyle: "",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
      {
        id: 1,
        text: "Complete redesign of clients website",
      },
    ],
  },
  {
    id: 4,
    background: "bg-white",
    title: "Work Out Loud",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/WorkOutLoud.jpeg",
    imageStyle: "",
    keyPoints: [
      {
        id: 1,
        text: "Built the front-end of a virtual conference/event application in React Typescript.",
      },
      {
        id: 2,
        text: "Video communication built using Vonage Video API, utilizing  their signal and event handlers to connect publishers and subscribers together, as well as provide moderator control for admins.",
      },
      {
        id: 3,
        text: "Chat feature for whole venue and individual sessions/booths built using a socket server connection to Work Out Louds backend using Autbahn to handle WAMP routing.",
      },
      {
        id: 4,
        text: "Event schedule, custom components rendered from clients backend data. Handled dates and all logic with custom functions and date-fns toolset.",
      },
      {
        id: 5,
        text: "Broadcast for “Main Stage Events”, built using hls.js and connecting to Vonage SDK.",
      },
    ],
  },
  {
    id: 5,
    background: "bg-white",
    title: "Motivated Moms",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/motivatedmoms.png",
    imageStyle: "",
    keyPoints: [
      {
        id: 1,
        text: "Created component to handle changing subscription plans between monthly and annually.",
      },
      {
        id: 2,
        text: "Setup Customers in Stripe and updated Stripe version to latest API, communicated subscription changes to stripe endpoints.",
      },
    ],
  },
  {
    id: 6,
    background: "bg-violet-100",
    title: "400 Doors",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/400doors.png",
    imageStyle: "",
    keyPoints: [
      {
        id: 1,
        text: "Built out marketing pages to be sent out in automated emails in a server-side rendered app.",
      },
      {
        id: 2,
        text: "Tested email pages using Litmus, highly recommended tool",
      },
    ],
  },
  {
    id: 7,
    background: "bg-red-50",
    title: "Bus Stop Mamas",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/bsm.webp",
    imageStyle: "",
    keyPoints: [
      {
        id: 1,
        text: "Mainstreamed current system built in the Wix CMS.",
      },
      {
        id: 2,
        text: "Used Wix’s Velo API to build user accounts for job seekers, employers, and admins.",
      },
      {
        id: 3,
        text: "Added subscription and pay for post model using stripe to automate their employer interactions.",
      },
      {
        id: 4,
        text: "Created dashboards for both job seekers and employers to track jobs applied and posted, edit user profile information, and report hires.",
      },
      {
        id: 5,
        text: "Automated emails for signup, marketing, and alerts using SendGrid.",
      },
    ],
  },
];

const projects = () => {
  return (
    <div className="">
      <div className="self-center justify-center sm:justify-start flex gap-4 flex-wrap">
        {cards.map((card: Card) => (
          <CardModal {...card} />
          // <Disclosure>
          //   {({ open, close }) => (
          //     <>
          //       <div
          //         className={`bg-slate-900 bg-gray- flex flex-col items-center justify-center min-w-200 w-full sm:w-72 sm:max-w-300 border-none rounded h-fit`}
          //       >
          //         <Disclosure.Button className={`flex flex-col w-full`}>
          //           <div
          //             className={`${card.background} py-8 h-52 px-2 flex flex-col items-center justify-center w-full sm:max-w-300 p-2 border-none rounded-t`}
          //           >
          //             <img className={card.imageStyle} src={card.image} />
          //           </div>
          //           <div className="p-3 flex flex-col">
          //             <div className="pt-1 text-gray-100 self-start">
          //               {card.title}
          //             </div>
          //             <div className="text-gray-400 text-sm pt-1">
          //               {card.toolDescription}
          //             </div>
          //           </div>
          //         </Disclosure.Button>
          //         <Transition
          //           enter="transition duration-100 ease-out"
          //           enterFrom="transform scale-95 opacity-0"
          //           enterTo="transform scale-100 opacity-100"
          //           leave="transition duration-75 ease-out"
          //           leaveFrom="transform scale-100 opacity-100"
          //           leaveTo="transform scale-95 opacity-0"
          //         >
          //           {card.keyPoints.map((point) => (
          //             <Disclosure.Panel
          //               onClick={() => close()}
          //               className={`text-gray-400 text-sm px-3 pb-3`}
          //             >
          //               {point.text}
          //             </Disclosure.Panel>
          //           ))}
          //         </Transition>
          //         {/* </div> */}
          //         <Disclosure.Button
          //           className="flex justify-end w-full pb-4 px-4"
          //           // onClick={open ? () => close() : () => open}
          //         >
          //           {open ? <ChevronUp /> : <ChevronDown />}
          //         </Disclosure.Button>
          //       </div>
          //     </>
          //   )}
          // </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default projects;
