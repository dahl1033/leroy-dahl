import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

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

const CardModal = (card: Card) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("HERREE");
    setIsOpen(false);
  }, []);

  return (
    <div
      className={`bg-slate-900 bg-gray- flex flex-col items-center justify-center min-w-200 w-full sm:w-72 sm:max-w-300 border-none rounded h-fit`}
    >
      <div onClick={() => setIsOpen(true)}>
        <div className={`flex flex-col w-full`}>
          <div
            className={`${card.background} py-8 h-52 px-2 flex flex-col items-center justify-center w-full sm:max-w-300 p-2 border-none rounded-t`}
          >
            <img className={card.imageStyle} src={card.image} />
          </div>
          <div className="p-3 flex flex-col">
            <div className="pt-1 text-gray-100 self-start">{card.title}</div>
            <div className="text-gray-400 text-sm pt-1">
              {card.toolDescription}
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
              {card.keyPoints.map((point) => (
                <Dialog.Title className={`text-gray-400 text-sm px-3 pb-3`}>
                  {point.text}
                </Dialog.Title>
              ))}

              {/* ... */}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CardModal;
{
  /* <Disclosure> */
}
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
