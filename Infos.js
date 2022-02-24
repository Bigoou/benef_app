import React from 'react';
import { useState, useEffect } from 'react';
import fleche from './images/icon/icon_fleche_noire.svg';

const Parametre = () => {

    const [user, setUser] = useState({
        username:'', 
        email:'', 
        postal:'', 
        birth:''
    })

    useEffect(() => {
        console.log({id_user : sessionStorage.getItem('id_user')})
        fetch('https://benef-app.fr/api-infos-utilisateur.php', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_user : sessionStorage.getItem('id_user')})
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setUser({
                username: data.username,
                email: data.email,
                postal: data.postal,
                birth: data.birth
              })
              console.log(user)
            })
            .catch(err => {
              console.log("Error Reading data " + err);
            });
    }, [])

    return (


        <div className="flex flex-col justify-center items-center h-screen w-screen bg-white-0 xl:dark:text-gray-50 dark:bg-gray-550 dark:text-white-0">
            <div id="infos" className="overflow-y-auto w-95vw h-full mt-20">


                <div className="flex flex-row justify-center items-center">
                    <h1 className="flex justify-center text-2xl w-full font-bold"><a href="/parametre" className="absolute left-5"><img src={fleche} alt="fleche" className="w-4"/></a>Informations du compte</h1>
                </div>

                <h2 className=" text-base pt-6 font-bold ">Username</h2>
                <li className='mt-2 list-none'>
                    <ul><a className="opacity-95 text-base">{user.username}</a></ul>
                </li>

                <h2 className=" text-base pt-6 font-bold ">E-mail</h2>
                <li className='mt-2 list-none'>
                    <ul><a className="opacity-95 text-base">{user.email}</a></ul>
                </li>


                <h2 className="mt-2 text-base pt-7 font-bold ">Code postal</h2>
                <li className=' mt-2 list-none'>
                    <ul><a className="opacity-95 text-base">{user.postal}</a></ul>
                </li>


                <h2 className="mt-2 text-base pt-7 font-bold">Date de naissance</h2>
                <li className=' mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 text-base">{user.birth}</ul>
                </li>


              
            </div>
        </div>
    )
}



export default Parametre

