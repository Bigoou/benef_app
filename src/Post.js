import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Accueil from './Accueil'


const Post = () => {
    const [values, setValues] = useState({
        image: '',
        title: '',
        desc: '',
        adress: '',
        postal: '',
        expiration: '',
        certified: 'false',
        cgu: 'false',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
                        
        } else {
            setPreview(null);
            console.log("ça marche")
        }
    }, [image]);

    return (
        <div className="flex justify-center items-center box-border h-screen mt-3 w-full dark:bg-black">
            <div className="bg-red-450 h-80vh overflow-y-auto rounded-lg shadow-xl w-95vw">
                <form className="post flex flex-col justify-center" onSubmit={handleSubmit}>
                    <div className="flex  relative justify-center items-center">
                        {preview ? (

                         <img src={preview}
                         onClick={() => {
                             setImage(null);
                         }} 
                         className="w-100vw h-30vh cursor-pointer rounded-t-md object-cover "/>
                         ) : (
                        <button onClick={(e) => {
                            e.preventDefault();
                            fileInputRef.current.click();
                            
                        }} className="w-100vw h-30vh rounded-md border-2 border-red-450 cursor-pointer bg-white-0 text-red-450 text-8xl"> +  
                        </button> )}
                        <label htmlFor="image" className="absolute bottom-10 text-2xl font-bold text-red-450"> Ajouter une image
                        </label>
                        <input id="image"
                            type="file"
                            accept="image/png, image/jpeg"
                            name="image"
                            maxLength="30"
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setImage(file);
                                    console.log("ça marche pas")
                                } else {
                                    setImage(null);
                                    
                                }
                            }}
                            className="hidden placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                            
                            
                        />
                    </div>

                    <div className="flex  relative justify-center items-center">
                        <label htmlFor="title" className="">
                        </label>
                        <input id="title"
                            type="text"
                            name="title"
                            maxLength="30"
                            placeholder="Votre titre" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                            value={values.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex  relative justify-center items-center">
                        <label htmlFor="desc" className="">
                        </label>
                        <input id="desc"
                            type="text"
                            name="desc"
                            
                            placeholder="Description" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                            value={values.desc}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex  relative justify-center items-center">
                        <label htmlFor="adress" className="">
                        </label>
                        <input id="adress"
                            type="text"
                            name="adress"
                            
                            placeholder="Adresse" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                            value={values.adress}
                            onChange={handleChange}
                        />
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
                        <input id="certified"
                            type="checkbox"
                            name="certified"
                            maxLength="30"
                            className="form-checkbox rounded-sm bg-transparent border-white-0 border-2 text-transparent focus:ring-transparent checked:border-white-0"
                            value={values.certified}
                            onChange={handleChange}
                        />
                        <label htmlFor="certified" className="text-white-150 pl-2">Je certifie que ce bon plan existe
                        </label>

                    </div>

                    <div className="flex  relative items-center ml-3">
                        <input id="cgu"
                            type="checkbox"
                            name="cgu"
                            maxLength="30"
                            className="form-checkbox rounded-sm bg-transparent border-white-0 border-2 text-transparent focus:ring-transparent checked:border-white-0"
                            value={values.cgu}
                            onChange={handleChange}
                        />
                        <label htmlFor="cgu" className="text-white-150 pl-2">Je certifie avoir pris connaissance des CGU
                        </label>

                    </div>

                    <div className="flex justify-end items-center py-5 mr-10">
                        <button className="block text-red-650 font-bold bg-white-150 hover:bg-white-150 hover:text-red-650 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 h-12 w-32 dark:bg-gray-550 rounded-full transition duration-300 ease-in-out" type="submit">Publier</button>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default Post
