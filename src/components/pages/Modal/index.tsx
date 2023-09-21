import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Style from './style';
import { motion } from "framer-motion"

interface IProps {
    close: () => void,
    children: ReactNode
}
export const overlayAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const modalAnimations = {
    initial: { y: "200%" },
    animate: { y: "0%" },
    exit: { y: "200%" }
}

const Modal = ({ close, children }: IProps) => {
    return createPortal(
        <Style>
            <div className="closer" />
            <motion.div
                variants={overlayAnimations}
                initial="initial"
                animate="animate"
                exit="exit"
                className='overlay'
                onClick={close}
            >
                <motion.div
                    variants={modalAnimations}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='content'
                    onClick={(e) => { e.stopPropagation() }}>
                    {children}

                </motion.div>
            </motion.div>
        </Style>
        , document.getElementById("modal") as HTMLElement)
}

export default Modal