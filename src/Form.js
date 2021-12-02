// import React from 'react':
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import React, {useState} from "react";
import Accueil from './Accueil'

// import hasAccount as Constants from "./useForm"

const Form = () => {
    

    const [isSubmitted, setIsSubmitted] = useState(false);

  
  function submitForm() {
      setIsSubmitted(true);
  }
  
    return (
        <div>
                
                {!isSubmitted ? ( <FormSignup submitForm={submitForm} />) : (<Accueil />)}            
                
        </div>
    )
}

export default Form
