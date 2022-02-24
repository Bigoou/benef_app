import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddIcon from '@material-ui/icons/Add';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import etiquette from './images/icon/icon_etiquette.svg';
import recherche from './images/icon/icon_recherche.svg';
import plus from './images/icon/icon_plus.svg';
import message from './images/icon/icon_message.svg';
import profil from './images/profil-gaelle.png';
import plusnoir from './images/icon/icon_plus_noir.svg';
import logo from './images/logo/logo_benef.svg';
import logodark from './images/logo/logo_benef_dark.svg';
import Parametre from './Parametre'
import parameter from './images/icon/icon_parametres.svg';
import favoris from './images/icon/icon_coeur.svg';
import { motion } from 'framer-motion/dist/framer-motion';



const Nav = ({ searchValue, setSearchValue }) => {
    return (
        <div className="flex justify-center z-50 relative">
            <div className="fixed flex justify-center items-center xl:-top-0 xl:h-10vh xl:justify-start bottom-0 w-100vw rounded-t-lg transition duration-500">
                <nav className="w-100vw">
                    <ul className="flex justify-around xl:justify-evenly xl:grid xl:grid-cols-nav xl:pr-32 xl:pl-32 items-center h-7vh xl:h-10vh bg-red-450 dark:bg-black">

                        <motion.div whileHover={{ scale: 1.1 }} className="justify-self-start">
                            <Link to="/home">
                                <li><img className="h-25px xl:hidden" src={etiquette} alt="" /></li>
                                <img src={logo} alt="Logo" className="w-36 dark:hidden xl:block hidden" />
                                <img src={logodark} alt="Logo" className="w-36 hidden sm:dark:hidden dark:hidden xl:dark:block" />
                            </Link>
                        </motion.div>

                        <Link to="/recherche" className="justify-self-center">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <li><img className="h-25px xl:hidden" src={recherche} alt="" /></li>

                                <div className="relative text-gray-600 focus-within:text-gray-400 sm:hidden hidden xl:block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </button>
                                    </span>
                                    <input type="search" name="q" className="py-2 text-sm text-white xl:bg-white h-12 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                                        placeholder="Recherche" autoComplete="off" value={searchValue} onChange={event => setSearchValue(event.target.value)}>
                                    </input>
                                </div>

                            </motion.div>
                        </Link>

                        <Link to="/post" className="xl:justify-self-end">
                            <motion.div whileHover={{ scale: 1.1 }} className="relative xl:bottom-0 bottom-6 flex justify-center items-center h-16 w-16 xl:h-12 xl:w-12 bg-white-0 rounded-full shadow-custom ">
                                <li ><img className="h-25px dark:hidden" src={plus} alt="" />
                                    <img className="h-25px hidden dark:block" src={plusnoir} alt="" /></li>
                            </motion.div>
                        </Link>
                        <Link to="/favoris" className="xl:justify-self-end">
                            <motion.div whileHover={{ scale: 1.1 }} className="">
                                <li><img className="h-24px xl:h-12 xl:w-12" src={favoris} alt="" /></li>
                            </motion.div>
                        </Link>

                        {/* <Link to="/messagerie">
                        <div className="relative top-3 hidden xl:hidden">
                            <li><img className="h-25px" src={message} alt=""/></li>
                            </div>
                        </Link> */}

                        <Link to="/profil" className="xl:justify-self-end">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <li><img className="h-25px xl:border-3 xl:h-12 xl:w-12 xl:rounded-full rounded-xl border-2 border-white" src={profil} alt="" /></li>
                            </motion.div>
                        </Link>

                        <Link to="/parametre" className="hidden xl:block xl:justify-self-end">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <li><img className="h-25px xl:h-12 xl:w-12" src={parameter} alt="" /></li>
                            </motion.div>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>



    )
}

export default Nav
