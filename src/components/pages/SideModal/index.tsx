import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MdArrowBackIosNew } from 'react-icons/md';

import Style from './style';

interface IProps {
    close: () => void;
    children: ReactNode;
}

export const overlayAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalAnimations = {
    initial: { x: '100%', opacity: 0.5 },
    animate: { x: '0%', opacity: 1 },
    exit: { x: '100%', opacity: 0.5 },
};

const SideModal = ({ close, children }: IProps) => {
    return (
        <Style>
            <div className="closer" />
            <motion.div
                variants={overlayAnimations}
                initial="initial"
                animate="animate"
                exit="exit"
                className="overlay"
                onClick={close}
            >
                <motion.div
                    variants={modalAnimations}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="content"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="head">
                        <button onClick={close} className="close_btn">
                            <MdArrowBackIosNew />
                        </button>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </Style>
    );
};

export default SideModal;
