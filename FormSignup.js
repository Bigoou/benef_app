import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css';
import './index.css';
import logo from './images/logo/logo_benef.png';
import logodark from './images/logo/logo_benef_dark.png'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from 'react';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleClickShowPassword, handleClickShowPassword2, handleMouseDownPassword, values, handleSubmit, errors, handleSubmitConnexion, handleChangeCo, valuesConnexion } = useForm(submitForm, validate);

    const [hasAccount, setHasAccount] = useState(false);

    const handleConnexion = e => {
        e.preventDefault();
        setHasAccount(true);
    };

    const handleConnexion2 = e => {
        e.preventDefault();
        setHasAccount(false);
    };

    if (hasAccount === true) {
        return (
            <div className="flex justify-center items-center bg-red-450 box-border h-screen w-full dark:bg-black">
                <div className="w-96">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="Logo" className="w-64 dark:hidden" />
                        <img src={logodark} alt="Logo" className="w-64 hidden dark:block" />
                    </div>
                    <form className="form" onSubmit={handleSubmitConnexion}>
                        <div className="flex  relative justify-center items-center">
                            <label htmlFor="username" className="">
                            </label>

                            <input id="username"
                                type="text"
                                name="username"
                                maxLength="30"
                                placeholder="Nom d'utilisateur" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 mt-5 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                                value={valuesConnexion.username}
                                onChange={handleChangeCo}
                            />
                            {errors.username && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.username}</p>}
                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="mdp" className="form-label">
                            </label>
                            <input id="mdp"
                                type={values.showPassword ? "text" : "password"}
                                name="mdp"
                                maxLength="30"
                                minLength="8"
                                placeholder="Mot de passe"
                                className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 mt-5 h-12 text-left focus:outline-none pt-5 focus:placeholder-transparent"
                                value={valuesConnexion.mdp}
                                onChange={handleChangeCo} />
                            {errors.mdp && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.mdp}</p>}
                            {
                                <InputAdornment position="end" className="absolute right-10" color="primary">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility style={{ color: "white" }} /> : <VisibilityOff style={{ color: "white" }} />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        </div>
                        <div className="flex justify-center items-center my-5 mt-10">
                            <button className="block text-white-150 font-bold bg-red-650 dark:bg-gray-550 hover:bg-white-150 hover:text-red-650 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 h-12 w-40  rounded-full transition duration-300 ease-in-out mt-5" type="submit">Se Connecter</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <h3 onClick={handleConnexion2} className="text-white-150 cursor-pointer hover:underline">Pas de compte ? Crée en un !</h3>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center items-center bg-red-450 box-border h-screen w-full dark:bg-black">
                <div className="w-96">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="Logo" className="w-64 dark:hidden" />
                        <img src={logodark} alt="Logo" className="w-64 hidden dark:block" />
                    </div>
                    <form className="form" action="api.php" method="GET" onSubmit={handleSubmit}>
                        <div className="flex  relative justify-center items-center">
                            <label htmlFor="username" className="">
                            </label>

                            <input id="username"
                                type="text"
                                name="username"
                                maxLength="30"
                                placeholder="Nom d'utilisateur" className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 pt-5 text-left focus:outline-none  focus:placeholder-transparent"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.username}</p>}
                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="birth" className="form-label">
                            </label>
                            <input id="birth"
                                type="date"
                                name="birth"
                                placeholder="Date de naissance"
                                className=" bg-transparent border-b-2 w-4/5 my-2 h-12 text-left text-white-150  focus:outline-none pt-5 focus:placeholder-transparent"
                                s={values.birth}
                                onChange={handleChange} />
                            {errors.birth && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.birth}</p>}
                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="postal" className="form-label">
                            </label>

                            <input id="postal"
                                type="number"
                                name="postal"
                                maxLength="5"
                                placeholder="Code postal"
                                className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 text-left focus:outline-none pt-5 focus:placeholder-transparent"
                                value={values.postal}
                                onChange={handleChange} />
                            {errors.postal && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.postal}</p>}
                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="email" className="form-label">
                            </label>

                            <input id="email"
                                type="email"
                                name="email"
                                maxLength="35"
                                placeholder="Adresse Email"
                                className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 text-left focus:outline-none pt-5 focus:placeholder-transparent"
                                value={values.email}
                                onChange={handleChange} />
                            {errors.email && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.email}</p>}
                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="mdp" className="form-label">
                            </label>
                            <input id="mdp"
                                type={values.showPassword ? "text" : "password"}
                                name="mdp"
                                maxLength="30"
                                minLength="8"
                                placeholder="Mot de passe"
                                className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 text-left focus:outline-none pt-5 focus:placeholder-transparent"
                                value={values.mdp}
                                onChange={handleChange} />
                            {errors.mdp && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.mdp}</p>}
                            {
                                <InputAdornment position="end" className="absolute right-10" color="primary">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility style={{ color: "white" }} /> : <VisibilityOff style={{ color: "white" }} />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        </div>

                        <div className="flex relative justify-center items-center">
                            <label htmlFor="mdpV" className="form-label">
                            </label>

                            <input id="mdpV"
                                type={values.showPassword2 ? "text" : "password"}
                                name="mdpV"
                                maxLength="30"
                                minLength="8"
                                placeholder="Confirmation du mot de passe"
                                className="placeholder-white-150 text-white-150 border-b-2 bg-transparent w-4/5 my-2 h-12 text-left focus:outline-none pt-5 focus:placeholder-transparent"
                                value={values.mdpV}
                                onChange={handleChange} />
                            {errors.mdpV && <p className="absolute -bottom-4 left-10 text-red-900 dark:text-red-650">{errors.mdpV}</p>}
                            {
                                <InputAdornment position="end" className="absolute right-10">
                                    <IconButton
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword2 ? <Visibility style={{ color: "white" }} /> : <VisibilityOff style={{ color: "white" }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        </div>
                        <div className="flex justify-center items-center my-5">
                            <button className="block text-red-450 font-bold border-white-0 hover:bg-red-450 hover:text-white-0 dark:hover:bg-white-150 dark:hover:text-gray-550 active:bg-red-200 h-12 w-40 dark:bg-gray-550 dark:text-white-0 rounded-full transition duration-300 ease-in-out mt-5" type="submit">S'inscrire</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <h3 onClick={handleConnexion} className="text-white-150 hover:underline cursor-pointer">Déjà un compte ? Connecte toi</h3>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

export default FormSignup
