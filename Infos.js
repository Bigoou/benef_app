import React from 'react';

const Parametre = () => {

    return (


        <div className="flex flex-col justify-center items-center h-screen w-screen bg-white dark:text-white-0">
            <div id="infos" className="overflow-y-auto w-95vw h-full mt-20">


                <h1 className="text-center text-2xl font-bold pt-7">Informations du compte</h1>

                <h2 className=" text-base pt-6 font-bold ">E-mail</h2>
                <li className='mt-2 list-none'>
                    <ul><a className="opacity-95 font-light text-base">{sessionStorage.getItem("mail")}</a></ul>
                </li>


                <h2 className="mt-2 text-base pt-7 font-bold ">Code postal</h2>
                <li className=' mt-2 list-none'>
                    <ul><a className="opacity-95 font-light text-base">{sessionStorage.getItem("postal")}</a></ul>
                </li>


                <h2 className="mt-2 text-base pt-7 font-bold">Date de naissance</h2>
                <li className=' mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-light text-base">{sessionStorage.getItem("birth")}</ul>
                </li>


              
            </div>
        </div>
    )
}



export default Parametre

