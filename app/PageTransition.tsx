"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0.3, x: 0 , y: 10, scale: 1 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname(); // Get the current path
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure this runs only on the client
  }, []);

  useEffect(() => {
    if (isMounted) {
      setDisplayedChildren(children);
    }
  }, [children, isMounted]);

  if (!isMounted) {
    return null; // Prevent rendering until the router is available
  }

  return (
    <motion.div
      key={pathname} // Change key on pathname to trigger animation
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="hidden" // Optional: exit animation
      transition={{ type: "spring", stiffness: 100 }}
    >
      {displayedChildren}
    </motion.div>
  );
}
