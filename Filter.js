import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import profil from './images/profil-gaelle.png';
import adresse from './images/icon/adress.svg';
import FilterButton from './FilterButton'
import Upvote from './Upvote';
import upvoteBas from './images/icon/upvote.svg';
import upvoteHaut from './images/icon/upvote2.svg';

const Filter = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    let filterByFilters;
    const [filters, setFilters] = useState({
      filtered:false,
      category: '',
      postal: '',
      filter_by: '',
  })

  const handleReset = () => {
      setFilters({
          filtered : false,
          category:'select',
          postal:'',
          filter_by:'',
      })
  }

  const handleChange = e => {
      const { name, value } = e.target;
      setFilters({
        ...filters,
        [name]: value
      });
    };
  
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

    const handleSubmitFiltered = e => {
      e.preventDefault();
      setFilters(prevState => ({
        ...prevState,
        filtered:true
      }));
  }
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
        const regexp = new RegExp(input, 'i');
        const filterByName = items.filter(x => regexp.test(x.title));
        console.log(filters.postal);
            filterByFilters = items.filter(item => item.postal === filters.postal);
            console.log(filterByFilters);

      return (
        <div className="h-screen w-screen flex justify-center overflow-auto items-center">
          <button></button>
          <ul className="h-full">
            <div className="mt-20 pb-12">
            <form className="post flex flex-col justify-center" onSubmit={(e) => handleSubmitFiltered(e)} id="filter_form">
    <div className="flex h-100px relative justify-center items-center w-4/5">

    </div>
    <div className="flex  relative justify-center items-center">
        <label htmlFor="cat" className="">{filters.category}</label>
    <select name="category" id="category" onChange={handleChange}>
            <option value="select">--Please choose an option--</option>
            <option value="all">Toutes catégories</option>
            <option value="1">Catégorie 1</option>
            <option value="2">Catégorie 2</option>
            <option value="3">Catégorie 3</option>
            <option value="4">Catégorie 4</option>
            <option value="5">Catégorie 5</option>
            <option value="6">Catégorie 6</option>
        </select>
        </div>

    <div className="flex  relative justify-center items-center">
        <label htmlFor="postal" className="">
        </label>
        <input id="postal"
            type="number"
            name="postal"
            maxLength="5"
            placeholder="Code Postal" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
            value={filters.postal}
            onChange={handleChange}
        />
    </div>

    <div className="flex  relative justify-center items-center">
        <label htmlFor="expiration" className="">
        </label>
        <input id="expiration"
            type="date"
            name="expiration"
            maxLength="30"
            placeholder="Date d'expiration" className="appearance-none placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
            value={filters.expiration}
            onChange={handleChange}
        />
    </div>

    <div className="flex relative items-center mt-6 ml-3">
    <h4 className="text-white-150 pl-2">{filters.filter_by}</h4>
    <label htmlFor="certified" className="text-white-150 pl-2">
        <input id="filter_by_date"
            type="radio"
            name="filter_by"
            maxLength="30"
            className=""
            value="date"
            onChange={handleChange}
        />
        Upvotes
        </label>
        </div>
        <div className="flex relative items-center mt-6 ml-3">
        <label className="text-white-150 pl-2">
         <input id="filter_by_upvote"
            type="radio"
            name="filter_by"
            maxLength="30"
            className=""
            value="upvote"
            onChange={handleChange}
        />
    Récent
    </label>
    </div>
    <div className="flex justify-end items-center py-5 mr-5">
        <button className="block w-24 h-9 text-red-450 text-lg font-bold border-2 border-white-0 bg-white-0 hover:bg-red-450 hover:text-white-0 hover:border-white-0 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 dark:bg-white-0 dark:text-black rounded-full transition duration-300 ease-in-out" type="submit">Appliquer</button>
    </div>
    <div className="flex justify-end items-center py-5 mr-5">
        <button onClick={handleReset} className="block  h-9 text-red-450 text-lg font-bold border-2 border-white-0 bg-white-0 hover:bg-red-450 hover:text-white-0 hover:border-white-0 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 dark:bg-white-0 dark:text-black rounded-full transition duration-300 ease-in-out">Réinitialiser</button>
    </div>

</form>  


          <input value={input} onChange={event => setInput(event.target.value)}/>
          {(filters.filtered ?

          filterByFilters.map(item => (
            <div className="w-92vw h-300px relative bg-red-450 dark:bg-black rounded-lg text-white-0 mb-2">
              <div className="w-full h-75% relative">
                <img className="object-cover rounded-t-lg h-full w-full" src={profil} alt="" />
                <div className="absolute bottom-5 -left-1.5">
                </div>
              </div>
              <div className="w-full h-25%">
                <li key={item.id_post}  className="mt-1 w-92vw">
                                    <div>
                          <div className="bg-white-0 text-black text-xl font-bold flex w-max py-1 rounded-lg">
                            <span className="px-2 upvote">{item.upvote}</span>
                          </div>
                        </div>
                  <h1 className="text-lg font-semibold mx-2">{item.title}</h1>
                  <div className="flex mt-2 text-sm w-92vw">
                    <img src={adresse} className="ml-2 mr-1 w-3.5"></img> {item.address} <div className="absolute right-3">{item.postal}</div>
                  </div>
                </li>
              </div>
            </div>
          ))
          :
          filterByName.map(item => (
            <div className="w-92vw h-300px relative bg-red-450 dark:bg-black rounded-lg text-white-0 mb-2">
              <div className="w-full h-75% relative">
                <img className="object-cover rounded-t-lg h-full w-full" src={profil} alt="" />
                <div className="absolute bottom-5 -left-1.5">
                </div>
              </div>
              <div className="w-full h-25%">
                <li key={item.id_post}  className="mt-1 w-92vw">
                                    <div>
                          <div className="bg-white-0 text-black text-xl font-bold flex w-max py-1 rounded-lg">
                            <span className="px-2 upvote">{item.upvote}</span>
                          </div>
                        </div>
                  <h1 className="text-lg font-semibold mx-2">{item.title}</h1>
                  <div className="flex mt-2 text-sm w-92vw">
                    <img src={adresse} className="ml-2 mr-1 w-3.5"></img> {item.address} <div className="absolute right-3">{item.postal}</div>
                  </div>
                </li>
              </div>
            </div>
          ))
          )}
              
            </div>
          </ul>
        </div >  
      );
      
    }};

export default Filter;
