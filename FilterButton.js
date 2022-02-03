import React from 'react';
import { useState, useEffect } from 'react';
import Filter from './Filter'
import plus from './images/icon/icon_plus.svg';
import plusblanc from './images/icon/icon_plus_blanc.svg';
import fleche from './images/icon/icon_fleche.svg';

const FilterButton = () => {
    const [values, setValues] = useState({
        category: '',
        postal: '',
        filter_by: '',
    })

    const handleReset = () => {
        setValues({
            category:'select',
            postal:'',
            filter_by:'',
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

  return (
    <form className="post flex flex-col justify-center" onSubmit={(e) => Filter.handleSubmitFiltered(e)} id="filter_form">
    <div className="flex h-100px relative justify-center items-center w-4/5">

    </div>
    <div className="flex  relative justify-center items-center">
        <label htmlFor="cat" className="">{values.category}</label>
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
            value={values.postal}
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
            value={values.expiration}
            onChange={handleChange}
        />
    </div>

    <div className="flex relative items-center mt-6 ml-3">
    <h4 className="text-white-150 pl-2">{values.filter_by}</h4>
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
  );
};

export default FilterButton;
