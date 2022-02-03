export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username  = "Nom d'utilisateur requis"
    }

    if(!values.birth){
        errors.birth = "Date de naissance requise"
    }

    if(!values.email) {
        errors.email = "Email requis"

    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Adresse non valide" 
    }

    if(!values.postal){
        errors.postal = "Code postal requis"
    } else if (values.postal.length !== 5){
        errors.postal = "Un code postal doit comporter 5 chiffres"
    }

    if(!values.mdp){
        errors.mdp = "Mot de passe requis"
    } else if (values.mdp.length < 8){
        errors.mdp = "Le mot de passe doit comporter au moins 8 caractères"
    }

    if(!values.mdpV) {
        errors.mdpV = "Mot de passe requis"
    } else if (values.mdpV !== values.mdp){
        errors.mdpV = "Les mots de passes ne correspondent pas"
    }

    return errors
}