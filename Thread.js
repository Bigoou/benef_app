import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import profil from './images/profil-gaelle.png';
import adresse from './images/icon/adress.svg';
import Upvote from './Upvote';
import upvoteBas from './images/icon/upvote.svg';
import upvoteHaut from './images/icon/upvote2.svg';

const Thread = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://benef-app.fr/api-post-render.php")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.items);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    function handleUpvote () {
        console.log(this)
        fetch('https://benef-app.fr/api-upvote.php', {
method: "POST",
headers: {
  'Accept' : 'application/json',
  'Content-Type' : 'application/json'
},
body: JSON.stringify(this)
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
})
.catch(err => {
console.log("Error Reading data " + err);
});
this.upvote++;
}

function handleDownvote () {
    console.log(this)
    fetch('https://benef-app.fr/api-downvote.php', {
method: "POST",
headers: {
'Accept' : 'application/json',
'Content-Type' : 'application/json'
},
body: JSON.stringify(this)
})
.then((response) => response.json())
.then((data) => {
console.log(data);
})
.catch(err => {
console.log("Error Reading data " + err);
});
}

    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <div className=" h-screen w-screen flex justify-center xl:justify-start xl:ml-72 overflow-auto items-center">
          <button></button>
          <ul className="h-full xl:w-2/6 xl:bg-gray-50">
            <div className="mt-32 ml-6 mr-6 pb-12 xl:bg-gray-50">
              {items.map(item => (
                <div className="w-92vw xl:w-full h-300px xl:h-96 relative bg-red-450 dark:bg-black rounded-lg text-white-0 mb-2 xl:mb-5">
                  <div className="w-full h-75% relative">
                    <img className="object-cover rounded-t-lg h-full w-full" src={profil} alt="" />
                    <div className="absolute bottom-5 -left-1.5">
                    </div>
                  </div>
                  <div className="w-full h-25%">
                    <li key={item.id_post}  className="mt-1 w-92vw">
                                        <div>
                              <div className="bg-white-0 text-black absolute top-44 text-xl font-bold flex w-max py-1 rounded-lg">
                                      {<button onClick={handleUpvote.bind(item)} className="pl-2">
                                      <img src={upvoteHaut} className=""></img>
                                      </button>
                                  }
                                <span id='nb_upvote' className="px-2 upvote">{item.upvote}</span>
                                {<button onClick={handleDownvote.bind(item)} className="pr-2">
                                  <img src={upvoteBas} className=""></img>
                                </button>}
                              </div>
                            </div>
                      <h1 className="text-lg font-semibold mx-2">{item.title}</h1>
                      <div className="flex mt-2 text-sm w-92vw">
                        <img src={adresse} className="ml-2 mr-1 w-3.5"></img> {item.address} <div className="absolute right-3">{item.postal}</div>
                      </div>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div >
      );
    }};
export default Thread;
