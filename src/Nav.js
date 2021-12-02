import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddIcon from '@material-ui/icons/Add';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Nav = () => {
    return (
        <div className="flex justify-center">
            <div className="fixed justify-center bottom-0 h-7vh w-100vw bg-red-450 dark:bg-gray-450 rounded-t-lg">
                <nav className="w-100vw h-7vh">
                    <ul className="flex justify-around">
                        <Link to="/">
                            <div className="relative top-3">
                            <li className=""><LocalOfferIcon/></li>
                            </div>
                        </Link>
                        <Link to="/recherche">
                        <div className="relative top-3">
                            <li><SearchIcon /></li>
                            </div>
                        </Link>
                        <Link to="/post">
                            <div className="relative bottom-6 flex justify-center items-center h-16 w-16 bg-white-0 rounded-full">
                            <li ><AddIcon /></li>
                            </div>
                        </Link>
                        <Link to="profil">
                        <div className="relative top-3">
                            <li><PersonOutlineIcon /></li>
                            </div>
                        </Link>
                        <Link to="messagerie">
                        <div className="relative top-3">
                            <li><ChatIcon /></li>
                            </div>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
