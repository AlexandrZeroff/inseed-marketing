import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import menu_open from '../assets/menu-open.svg'
import menu_close from '../assets/menu-close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import search from '../assets/search.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  }
  return (
    <section id="navbar" className="relative">
      <div className="container-p">
        <div className="flex items-center justify-between py-4">
          <Link to="/">
            <img src={logo} alt="Inseed logo" className="h-10"></img>
          </Link>
          <nav className="nav-menu hidden md:flex items-center">
            <AnchorLink href="#services">Сервіси</AnchorLink>
            <AnchorLink href="#">Кейси</AnchorLink>
            <AnchorLink href="#">Партнерство</AnchorLink>
            <AnchorLink href="#feedback">Зв’язатися</AnchorLink>
            <a href="https://inseed.marketing/" target="_blank">
              inseed.marketing
            </a>
          </nav>
          {toggleMenu ? (
            <img
              className="h-5 ml-auto cursor-pointer md:hidden"
              src={menu_close}
              onClick={() => setToggleMenu(false)}
            ></img>
          ) : (
            <img
              src={menu_open}
              alt="Open menu"
              className="h-5 ml-auto cursor-pointer md:hidden"
              onClick={() => setToggleMenu(true)}
            ></img>
          )}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%', maxWidth: 420 }}
                className="nav-menu absolute w-full h-[100vh] top-0 right-0 bg-white p-4 flex flex-col z-50"
              >
                <motion.div
                  className="flex items-center justify-between"
                  initial="closed"
                  animate="open"
                  variants={sideVariants}
                >
                  <a href="tel:+380985525943" className="text-base lg:text-lg">
                    +380 98 552 5943
                  </a>
                  <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center ml-6">
                    <a href="#" className="text-white text-sm">
                      Ua
                    </a>
                  </div>
                  <div className="w-8 h-8 bg-smooth-red rounded-full flex justify-center items-center ml-2">
                    <a href="#">
                      <img
                        src={search}
                        alt="Search"
                        className="w-4"
                        fill="white"
                      ></img>
                    </a>
                  </div>
                  <img
                    className="h-5 ml-auto cursor-pointer md:hidden"
                    src={menu_close}
                    onClick={() => setToggleMenu(false)}
                  ></img>
                </motion.div>
                <motion.nav
                  className="menu-burger-nav flex flex-col mt-8"
                  initial="closed"
                  animate="open"
                  variants={sideVariants}
                >
                  <AnchorLink
                    href="#services"
                    onClick={() => setToggleMenu(false)}
                  >
                    Сервіси
                  </AnchorLink>
                  <AnchorLink href="#" onClick={() => setToggleMenu(false)}>
                    Кейси
                  </AnchorLink>
                  <AnchorLink href="#" onClick={() => setToggleMenu(false)}>
                    Партнерство
                  </AnchorLink>
                  <AnchorLink
                    href="#feedback"
                    onClick={() => setToggleMenu(false)}
                  >
                    Зв’язатися
                  </AnchorLink>
                  <a
                    href="https://inseed.marketing/"
                    onClick={() => setToggleMenu(false)}
                  >
                    inseed.marketing
                  </a>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hidden tablet:flex items-center">
            <a href="tel:+380985525943" className="text-base lg:text-lg">
              +380 98 552 5943
            </a>
            <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center ml-3">
              <a href="#" className="text-white text-sm">
                Ua
              </a>
            </div>
            <div className="w-8 h-8 bg-smooth-red rounded-full flex justify-center items-center ml-2">
              <a href="#">
                <img
                  src={search}
                  alt="Search"
                  className="w-4"
                  fill="white"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
