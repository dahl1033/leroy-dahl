import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Dialog } from "@headlessui/react"

const CardModal = ({ card, listId, onClose }: any) => {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        console.log("card: ",)
    }, [card])
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <Dialog
                        static
                        as={motion.div}
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        <div className="fixed inset-0 bg-black/30" />

                        <Dialog.Panel className="none fixed top-0 w-full h-full">
                            <div className="relative m-auto p-5 w-1/2 max-w-[500px] bg-white mt-1/2 ">
                                <Dialog.Title>Deactivate account</Dialog.Title>
                                <Dialog.Description>
                                    This will permanently deactivate your account
                                </Dialog.Description>

                                <p>
                                    Are you sure you want to deactivate your account? All of your data
                                    will be permanently removed. This action cannot be undone.
                                </p>

                                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                )}
            </AnimatePresence></>
    )
}

export default CardModal;