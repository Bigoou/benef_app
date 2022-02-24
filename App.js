import './App.css';
import Form from './Form';
import './Form.css';
import Accueil from './Accueil'
import React, {useState} from "react";


function App() {

 
  return (
    <div className=" bg-white-0 dark:bg-gray-550 h-screen overflow-y-hidden transition ease-in-out duration-500">
      {!localStorage.getItem("isConnected") ? ( <Form/>) : (<Accueil/>)}            
    </div>
  );
}

export default App;


