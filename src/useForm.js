import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username:'',
    email:"",
    birth:"",
    postal:"",
    mdp:"",
    mdpV:"",
    showPassword: false,
    showPassword2: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [valuesConnexion, setValuesConnexion] = useState({
    username:'',
    mdp:"",
    showPassword: false,
  });
  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleChangeCo = e => {
    const { name, value } = e.target;
    setValuesConnexion({
      ...valuesConnexion,
      [name]: value
    });
  };

  

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    var test = JSON.stringify(values);
    console.log(test)
    console.log(values);
  fetch('http://perso-etudiant.u-pem.fr/~antoine.droyer/api.php', {
  method: "POST",
  headers: {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify(values)

})
.then((response) => response.text())
.then((result) => {
  console.log(result)
}).catch(err => {
  // Do something for an error here
  console.log("Error Reading data " + err);
  
});
};



const handleSubmitConnexion = e => {
  e.preventDefault();
  // setErrors(validate(values));
  setIsSubmitting(true);
  var test = JSON.stringify(valuesConnexion);
  console.log(test)
  console.log(valuesConnexion);
fetch('http://perso-etudiant.u-pem.fr/~antoine.droyer/api-connexion.php', {
method: "POST",
headers: {
  'Accept' : 'application/json',
  'Content-Type' : 'application/json'
},
body: JSON.stringify(valuesConnexion)
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
localStorage.setItem("user", JSON.stringify(data));
localStorage.setItem("auth", 1);
})
.catch(err => {
console.log("Error Reading data " + err);
});
};

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback && callback();
      }
    },
    [errors]
  );

  return { handleChange,handleClickShowPassword,handleClickShowPassword2,handleMouseDownPassword, handleSubmit, handleSubmitConnexion, handleChangeCo, values, valuesConnexion, errors };
};

export default useForm;

