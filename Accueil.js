import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Parametre from './Parametre'
import Post from './Post'
import Messagerie from './Messagerie'
import Home from './Home'
import Profil from './Profil'
import Recherche from './Recherche'
import Infos from './Infos'
import Bloque from './Bloque'
import logo from './images/logo/logo_benef.png';
import logodark from './images/logo/logo_benef_dark.png';
import parameter from './images/icon/icon_parametres.svg';
import plus from './images/icon/icon_plus.svg';
import plusnoir from './images/icon/icon_plus_noir.svg';

import { useState } from "react"


const Accueil = () => {

    const [isPosting, setIsPosting] = useState(false);

    function handlePost(e) {
        e.preventDefault();
        setIsPosting(true);
    }

    return (
        <div className="dark:bg-gray-550 xl:bg-gray-200 xl:overflow-x-hidden">

            <div className="flex justify-center z-50 relative">
                <div className="fixed flex h-10vh w-100vw bg-red-450 dark:bg-black xl:justify-start justify-center items-center rounded-b-lg">
                    <img src={logo} alt="Logo" className="w-36 dark:hidden xl:ml-96" />
                    <img src={logodark} alt="Logo" className="w-36 hidden dark:block" />     
                    
                    <div class="xl:flex xl:items-center xl:justify-center xl:ml-52 hidden">
  <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
            <input type="search" name="q" class="py-2 text-sm text-white xl:bg-white h-12 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900" 
                placeholder="Recherche" autocomplete="off">
                                </input>
                                
                            </div>     
  </form>
                        <div className="relative flex justify-center items-center h-14 w-14 ml-48 bg-white-0 rounded-full shadow-custom">
                            <img className="h-25px dark:hidden" src={plus} alt=""/>
                            <img className="h-25px hidden dark:block" src={plusnoir} alt=""/>
                            </div>
                        <img className="w-14 h-14 ml-6 bg-black dark:bg-gray-650 border-3 border-white dark:border-black rounded-full object-cover" />

                </div>
            </div>
        </div>  
                    
              
            


            <Router>
            <Link to="/parametre">
                    <img src={parameter} alt="Paramètres" className="absolute xl:w-14 xl:h-14 xl:mr-96 h-25px right-6 top-6 z-50" />
                    </Link>
                <div>
                    <Nav className="hidden"/>
                    <Switch>
                    <Route path="/home" exact component={Home} />
                        <Route path="/recherche" component={Recherche} />
                        <Route path="/post" component={Post} />
                        <Route path="/messagerie" component={Messagerie} />
                        <Route path="/profil" component={Profil} />
                        <Route path="/parametre" component={Parametre} />
                            <Route path="/infos" component={Infos} />
                            <Route path="/bloque" component={Bloque} />
                    </Switch>
                </div>
            </Router>
        </div>
    )

}

// const Home = () => (
//     <div>
//         <h1>Page d'accueil</h1>
//     </div>
// )


export default Accueil
