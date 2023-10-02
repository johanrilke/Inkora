import React, {useState} from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink/NavLink';
import { slide, scale } from './anim';

const navItems = [
    {
      title: "Inkora",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
]

const Nav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);


  return (
          <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
            {
              navItems.map( (data, index) => {
                return (
                    <>
                      <NavLink key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></NavLink>
                      {index === 0 && <motion.div className={styles.plusSign} variants={slide} initial="initial" animate="enter" exit="exit"></motion.div>}
                    </>
                  )
              })
            }
          </div>
  )
}

export default Nav