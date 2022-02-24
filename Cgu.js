import React from 'react';
import { Link } from 'react-router-dom';


const Cgu = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen dark:bg-gray-550 bg-gray-100 xl:bg-white-0 dark:text-white-0">
            <div id="infos" className="overflow-y-scroll w-95vw h-full pr-2 mt-14 mb-14 dark:bg-gray-550 xl:bg-white-0 xl:w-1/3 xl:p-5">


                <h1 className="text-center text-2xl font-bold pt-7">Conditions générales <br></br> & CGU </h1>

                <h2 className=" text-xl pt-10 font-semibold ">Présentation de BENEF</h2>
                <li className='mt-2 list-none'>

                    <ul className="pb-2">
                        
                            <p class="opacity-95 font-normal">BENEF est une web-application unique en son genre. BENEF va vous permettre de consulter les bons plans publiés par les autres utilisateurs et de partager les vôtres avec la communauté de benefeurs. BENEF est ouvert à tous.
                            Nous souhaitons inciter les gens à sortir, le prix des sorties étant souvent un frein, surtout pour les jeunes et les étudiants. Nous souhaitons aussi développer un esprit collectif parmi les benefeurs,
                            c’est pourquoi ce sont les utilisateurs qui partagent les bons plans qui leur tiennent à cœur.</p>
                    </ul>
                </li>


                <h2 className="mt-2 text-xl pt-7 font-semibold">Utilisation de Benef</h2>
                <li className=' mt-2 list-none'>
                    <ul> 
                        <p class="opacity-95 font-normal">
                        BENEF est disponible pour les internautes adultes et les internautes mineurs sous le consentement et la responsabilité de leurs parents,
                        certains contenus étant réservés aux personnes adultes (alcool dans les bars,...).</p>
                    </ul>
                </li>


                <h2 className="mt-2 text-xl pt-7 font-semibold">Autorisations et restrictions Générales</h2>
                <li className=' mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-light">
                        <p class="opacity-95 font-normal">Vous pouvez accéder au service et l’utiliser tel qu’il vous est proposé sous condition de respecter les règles. Les restrictions suivantes s’appliquent à votre utilisation du service.
                        Vous n’êtes pas autorisés à :<br></br>
                        • vendre, concéder sous licence, altérer, modifier ou utiliser de toute autre façon tout ou partie du Service ou du Contenu sauf si le service vous y a explicitement autorisé, par écrit<br></br>
                        • utiliser le Service pour vendre de la publicité<br></br>
                        • mentir sur la nature, le prix, les dates du bon plan publié sur la plateforme <br></br>
                        • usurper l’identité d’autrui <br></br>
                        • accéder au Service par le biais de procédés automatisés <br></br>
                        • abuser des options de signalements <br></br>
                        • recueillir ou utiliser toute information permettant d’identifier une personne<br></br>
                        • diffuser du contenu obscène, vulgaire, offensant <br></br><br></br>
                        Les conditions générales d’utilisation rappellent aux internautes que les éléments du site tels que le texte et les images
                        sont protégés par le droit d’auteur et que leur utilisation sans autorisation préalable expresse est interdite.</p>
                    </ul>
                </li>


                <h2 className="mt-2 text-2xl  text-center pt-10 font-semibold ">Conditions générales</h2>
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal">
                        Les présentes conditions générales régissent votre utilisation de BENEF.<br></br>
                        Le service peut inclure des liens vers des sites web tiers qui n’appartiennent pas à BENEF. Nous déclinons toute responsabilité quant à l’utilisation de ces sites.
                    </ul>
                </li>

                <h2 className="mt-2 text-xl pt-7 font-semibold ">Le règlement général sur la protection des données</h2>
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal pb-2"><p>
                        Les informations recueillies sur le formulaire d’inscription sont enregistrées dans notre base de données informatisée par nos développeurs. Ces informations permettent de créer votre compte et profil BENEF.<br></br>
                        Les données collectées seront communiquées aux seuls destinataires suivants: <strong>Célian Chevereau, Antoine Droyer, Gaspard Freyssinet, Merwan Jaudally et Jules Mesnil</strong>.<br></br>
                        Les données sont conservées jusqu’à la suppression souhaitée par l’utilisateur ou par les administrateurs.<br></br>
                        Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Vous pouvez retirer à tout moment votre consentement au traitement de vos données. Vous pouvez également vous opposer au traitement de vos données. Vous pouvez également exercer votre droit à la portabilité de vos données. Consultez le site du CNIL pour plus d’informations sur vos droits.<br></br>
                        Pour la moindre question sur le traitement de vos données dans BENEF, vous pouvez contacter <strong>admin@benef-app.fr</strong> .<br></br>
                        Si après nous avoir contacté, vous estimez que vos droits “Informatique et Libertés” ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.<br></br>
                        </p>
                    </ul>
                </li>
                <h2 className="mt-2 text-2xl  text-center pt-10 font-semibold ">Conditions générales d'utilisation</h2>
                
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal pb-2"><p>
                        Les présentes conditions générales d’utilisation régissent votre utilisation de BENEF.<br></br>
                        </p>
                    </ul>
                </li>
                <h2 className="mt-2 text-xl pt-7 font-semibold ">Compte</h2>
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal pb-2"><p>
                        Il faut forcément être connecté pour accéder au Service et Contenu. La création d’un compte comporte plusieurs exigences: un nom d’utilisateur, une date de naissance, un code postal, une adresse mail ainsi qu’un mot de passe. Une fois connecté, il est possible à l'utilisateur de rajouter une photo de profil et une biographie à son profil. Il est interdit d’avoir un nom d’utilisateur, une photo de profil ou une biographie obscène, vulgaire, offensante ou haineux. <br></br><br></br>
                        Il n’est pas possible de trouver un utilisateur par la fonction recherche.<br></br><br></br>

                        Il est possible d’accéder au compte d’un utilisateur en cliquant sur sa photo de profil ou sur son nom d’utilisateur depuis un bon plan posté.<br></br><br></br>
                        Sur le compte d’un autre utilisateur sera visible uniquement son nom d’utilisateur, sa photo de profil, sa biographie et les bons plans qu’il a déjà postés. L’adresse mail, la date de naissance et le code postal ne sont visibles que par les administrateurs de BENEF.<br></br><br></br>

                        Les administrateurs se gardent le droit de supprimer de façon unilatérale et sans justification le compte de toute personne ne respectant pas les règles.<br></br>

                        </p>
                    </ul>
                </li>

                <h2 className="mt-2 text-xl pt-7 font-semibold ">Bons plans</h2>
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal"><p>
                        Dans BENEF, un bon plan est une sortie ou une activité dont le prix a subi une réduction, est gratuit ou est bas (ou plus bas que la moyenne).<br></br><br></br>
 
                        Est un bon plan: une exposition, une galerie d’art, un restaurant, un fast-food, un food-truck, un bar, une boîte de nuit, une soirée, une soirée étudiante, un festival, un workshop…<br></br><br></br>

                        N’est pas un bon plan: tout produit physique achetable, par exemple des vêtements, des courses, du matériel informatique, électronique…<br></br><br></br>
                        /!\ À noter que cela n’inclut pas la nourriture des restaurants.<br></br><br></br>
Les utilisateurs s’engagent à partager des lieux et activités répertoriés et légaux.<br></br><br></br>

                        BENEF se dégage de toute responsabilité si l’activité ou la sortie ne respecte pas les règles citées précédemment.<br></br><br></br>

                        Vous engagez aussi votre responsabilité pour les droits d’auteur des images que vous utilisez pour présenter le bon plan publié. BENEF se dégage aussi de toute responsabilité sur ce point<br></br><br></br>
                        </p>
                    </ul>
                </li>

                <h2 className="mt-2 text-xl pt-7 font-semibold ">Signalement</h2>
                <li className='mt-2 list-none'>
                    <ul className="w-full flex justify-between items-center opacity-95 font-normal pb-2"><p>
                        Le signalement permet aux utilisateurs de signaler aux administrateurs du site qu’un Contenu ou un utilisateur ne respectent pas les Conditions Générales d’Utilisation de BENEF.<br></br><br></br>

Les administrateurs se gardent le droit de supprimer de façon unilatérale et sans justification le bon plan de toute personne ne respectant pas les règles.<br></br><br></br>

Si un utilisateur abuse des fonctions de signalement (spam, signalement de contenus respectant les CGU…) les administratifs de BENEF se gardent le droit de suspendre de manière indéterminée le compte de l’utilisateur.
<br></br>
                        


                        </p>
                    </ul>
                </li>
            </div>
        </div>
    )

}


export default Cgu
