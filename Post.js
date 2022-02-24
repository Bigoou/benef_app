import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Accueil from './Accueil';
import plus from './images/icon/icon_plus.svg';
import plusblanc from './images/icon/icon_plus_blanc.svg';
import fleche from './images/icon/icon_fleche.svg';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import validate from './validateInfo'



const Post = () => {

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [values, setValues] = useState({
        image: undefined,
        title: '',
        desc: '',
        address: '',
        postal: '',
        expiration: '',
        category: '',
        certified: 'false',
        cgu: 'false',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value);
    };

    const img_form = document.getElementById('image');
    let history = useHistory();


    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            console.log("ça marche pas")
        } else {
            setImage(null);
        }

        console.log(file)
    }

    const myForm = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        // const formData = new FormData();
        // const postForm = myForm.current;
        // const formData = new FormData();
        //         formData.append('image', image);
        //         formData.append('title', values.title);
        //         formData.append('desc', values.desc);
        //         formData.append('address', values.address);
        //         formData.append('postal', values.postal);
        //         formData.append('expiration', values.expiration);
        //         formData.append('category', values.category);
        //         formData.append('certified', values.certified);
        //         formData.append('cgu', values.cgu);
        // console.log(postForm);
        // console.log(formData);
        console.log('fetch');
        const data = await fetch('https://benef-app.fr/api-post.php', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const response = await data.json();
        if (response) {
            console.log("ok");
        } else {
            console.log("not ok");
        }
       
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
        <div className="flex justify-center items-center h-screen mt-3 w-full bg-white-0 dark:bg-gray-550 ">
            <div className="bg-red-450 dark:bg-black xl:w-2/6 h-80vh overflow-y-auto rounded-lg shadow-xl w-95vw">
                <form className="post flex flex-col justify-center" onSubmit={(e) => handleSubmit(e)} id="post_form" ref={myForm}>
                    <div className="flex relative justify-center items-center">
                        {preview ? (

                            <img src={preview}
                                onClick={() => {
                                    setImage(null);
                                }}
                                className="w-100vw h-30vh bg-white-0 dark:bg-gray-650 cursor-pointer border-2 border-red-450 dark:border-black rounded-t-md object-contain " />
                        ) : (
                            <button onClick={(e) => {
                                e.preventDefault();
                                fileInputRef.current.click();

                            }} className="w-100vw h-30vh rounded-t-md border-2 border-red-450 cursor-pointer bg-white-0 text-red-450 dark:text-white-0 text-xl leading-loose dark:bg-gray-650 dark:border-black">
                                <img className="h-40px m-auto dark:hidden" src={plus} alt="" />
                                <img className="h-40px m-auto hidden dark:block" src={plusblanc} alt="" /> Ajouter une photo
                            </button>)}

                        <input id="image"
                            type="file"
                            accept="image/png, image/jpeg"
                            name="image"
                            maxLength="30"
                            ref={fileInputRef}
                            value={values.image}
                            onChange={onFileChange}
                            className="hidden placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"


                        />
                    </div>

                    <div className="flex h-100px relative justify-center items-center w-4/5">
                        <div className="w-full h-80px flex justify-center items-center">
                            <select name="category" id="category" onChange={handleChange} className="block appearance-none bg-red-450 text-white-0 border-gray-400 hover:border-gray-500 px-4 py-2 pr-12 ml-12 shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="select">--Choisissez une catégorie--</option>
                                <option value="1" className="bg-white-0 text-red-450">Restaurant</option>
                                <option value="2" className="bg-white-0 text-red-450">Bar</option>
                                <option value="3" className="bg-white-0 text-red-450">Musée / Expo</option>
                                <option value="4" className="bg-white-0 text-red-450">Festival</option>
                                <option value="5" className="bg-white-0 text-red-450">Catégorie 5</option>
                                <option value="6" className="bg-white-0 text-red-450">Catégorie 6</option>
                            </select>
                        </div>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
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
                        <label htmlFor="desc" className="w-full flex justify-center">
                            <textarea
                                id="desc"
                                type="text"
                                name="desc"
                                rows="40"
                                className=" resize-y placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-24 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                                placeholder="Description"
                                value={values.desc}
                                onChange={handleChange}
                            ></textarea>
                        </label>
                    </div>

                    <div className="flex  relative justify-center items-center">
                        <label htmlFor="address" className="">
                        </label>
                        <input id="address"
                            type="text"
                            name="address"

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
                        {errors.postal && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.postal}</p>}
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
                    <div className="flex justify-end items-center py-5 mr-5">
                        <button className="block w-24 h-9 text-red-450 text-lg font-bold border-2 border-white-0 bg-white-0 hover:bg-red-450 hover:text-white-0 hover:border-white-0 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 dark:bg-white-0 dark:text-black rounded-full transition duration-300 ease-in-out" type="submit">Publier</button>
                    </div>

                </form>
            </div>


        </div>
    )

}

export default Post
