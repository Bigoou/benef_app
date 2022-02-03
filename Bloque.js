import React from 'react';

const Parametre = () => {

    return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white dark:text-white-0">
    <div id="bloque" className="overflow-y-auto w-95vw h-full mt-20">


        <h1 className="text-center text-2xl font-bold pt-7">Utilisateurs bloqués</h1>
        <div className="flex items-center pt-7">
        <img className="w-100px h-100px bg-transparent dark:bg-gray-650 border-3 border-red-450 dark:border-black rounded-full object-cover " />
        <h1 className="text-center text-2xl font-bold pl-5">Pseudo du boug</h1>
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 ml-16 rounded-full">
  Débloquer
        </button>

</div>
      
    </div>
</div>
)

     
    
}



export default Parametre

