import { motion } from "framer-motion";

import {GiHamburgerMenu } from 'react-icons/gi';
import {GrClose } from 'react-icons/gr';

import './style.scss'

interface ToogleMenuProps {
  isOpen: boolean;
  toogle: () => void;
}

export function ToogleMenu({ toogle, isOpen }:ToogleMenuProps) {
  return (
    <div className="fake-button" onClick={toogle}>
      {isOpen ? (
        <motion.div
          initial={false}
          animate={isOpen && "visible"}
          whileTap={{ rotate: [0, 90, 180, 360] }}
          variants={{
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
        >
          <GrClose />
        </motion.div>
      ) : (
        <motion.div
          initial={false}
          animate={isOpen && "visible"}
          whileTap={{ rotate: [360, 180, 90, 0], transition: { duration: 1 } }}
          variants={{
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
        >
          <GiHamburgerMenu />
        </motion.div>
      )}
    </div>
  );
}
