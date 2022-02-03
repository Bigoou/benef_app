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

const Nav = () => {
    return (
        <div className="flex justify-center z-50 relative xl:hidden">
            <div className="fixed justify-center bottom-0 h-7vh w-100vw bg-red-450 dark:bg-black rounded-t-lg">
                <nav className="w-100vw h-7vh">
                    <ul className="flex justify-around">
                        <Link to="/home">
                            <div className="relative top-3">
                            <li className=""><img className="h-25px" src={etiquette} alt=""/></li>
                            </div>
                        </Link>
                        <Link to="/recherche">
                        <div className="relative top-3">
                            <li><img className="h-25px" src={recherche} alt=""/></li>
                            </div>
                        </Link>
                        <Link to="/post" className="hover:animate-bounce">
                            <div className="relative bottom-6 flex justify-center items-center h-16 w-16 bg-white-0 rounded-full shadow-custom">
                            <li ><img className="h-25px dark:hidden" src={plus} alt=""/>
                            <img className="h-25px hidden dark:block" src={plusnoir} alt=""/></li>
                            </div>
                        </Link>
                        <Link to="/messagerie">
                        <div className="relative top-3 ">
                            <li><img className="h-25px" src={message} alt=""/></li>
                            </div>
                        </Link>
                        <Link to="/profil">
                        <div className="relative top-3">
                            <li><img className="h-25px rounded-xl border-2 border-white" src={profil} alt=""/></li>
                            </div>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
