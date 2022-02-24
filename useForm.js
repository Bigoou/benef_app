import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";


const useForm = (callback, validate) => {
  
  let history = useHistory();

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

  const [errorsConnexion, setErrorsConnexion] = useState({
    emptyUsername : false,
    emptyPassword : false,
    wrongEntries : false,
  });

  const [valuesConnexion, setValuesConnexion] = useState({
    username:'',
    mdp:"",
    showPassword: false,
  });

  const [stayConnected, setStayConnected] = useState(false);

  const handleStayConnected = () => {
    setStayConnected(!stayConnected);
  }
  
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
  fetch('https://benef-app.fr/api.php', {
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
  setErrors(validate(values));
  setIsSubmitting(true);
  var test = JSON.stringify(valuesConnexion);
  console.log(test)
  console.log(valuesConnexion);
fetch('https://benef-app.fr/api-connexion.php', {
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
  if(stayConnected){
    localStorage.setItem("isConnected", true);
  }else{
    sessionStorage.setItem("user", data.username);
  }
sessionStorage.setItem("isConnected", true);
sessionStorage.setItem("id_user", data.id_user)
console.log(stayConnected)
console.log(sessionStorage.getItem("user"))
if(localStorage.getItem("isConnected")){
  window.location.reload();
}else 
if(sessionStorage.getItem("isConnected")){
  console.log("oui il est bien connecté là")
  window.location.reload();
  console.log(stayConnected)
}
})
.catch(err => {
console.log("Error Reading data " + err);
console.log(stayConnected);
setErrorsConnexion({
  ...errorsConnexion,
    wrongEntries : true
});
console.log(errorsConnexion);
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

  return {handleChange,handleClickShowPassword,handleClickShowPassword2,handleMouseDownPassword, handleSubmit, handleSubmitConnexion, handleChangeCo, values, valuesConnexion, errors, errorsConnexion, handleStayConnected, stayConnected };
};

export default useForm ;

