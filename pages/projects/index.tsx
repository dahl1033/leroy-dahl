import { Disclosure, Transition } from "@headlessui/react";
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

interface Card {
  id: number;
  background: string;
  title: string;
  description: string;
  image: string;
  toolDescription: string;
  keyPoints: { id: number; text: string }[];
}
const cards: Card[] = [
  {
    id: 1,
    background: "bg-violet-100",
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/housingfirst.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 2,
    background: "bg-white",
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/motivatedmoms.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: "bg-gray-200",
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/purina.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: "bg-white",
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/WorkOutLoud.jpeg",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: getBrandStyle(),
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/hugetheater.svg",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: getBrandStyle(),
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/400doors.png",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
  {
    id: 3,
    background: getBrandStyle(),
    title: "Housing First Minnesota",
    toolDescription: "React, Rails, PostgreSQL, Stripe",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/bsm.webp",
    keyPoints: [
      {
        id: 1,
        text: "Upgraded their checkout process for one-time credit card payments and subscription model",
      },
      {
        id: 2,
        text: "Implemented ACH Direct Debit using Stripe's API for high paying customers to avoid credit card fees",
      },
    ],
  },
];

const projects = () => {
  return (
    <div className="">
      <div className="self-center justify-center sm:justify-start flex gap-4 flex-wrap">
        {cards.map((card: Card) => (
          <Disclosure>
            {({ open, close }) => (
              <>
                <div
                  className={`bg-slate-900 bg-gray- flex flex-col items-center justify-center min-w-200 w-72 max-w-300 border-none rounded h-fit`}
                >
                  {/* <div className="p-3 pt-4 flex flex-col self-start"> */}
                  <Disclosure.Button className={`flex flex-col w-full`}>
                    <div
                      className={`${card.background} py-8 h-52 px-2 flex flex-col items-center justify-center w-full max-w-300 p-2 border-none rounded-t`}
                    >
                      <img className="" src={card.image} />
                    </div>
                    <div className="p-3 flex flex-col">
                      <div className="pt-1 text-gray-100 self-start">
                        {card.title}
                      </div>
                      <div className="text-gray-400 text-sm pt-1">
                        {card.toolDescription}
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    {card.keyPoints.map((point) => (
                      <Disclosure.Panel
                        className={`text-gray-400 text-sm px-3 pb-3`}
                      >
                        {point.text}
                      </Disclosure.Panel>
                    ))}
                  </Transition>
                  {/* </div> */}
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default projects;
