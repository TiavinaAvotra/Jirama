import React from "react";
import Jirama from './../images/JIRAMA.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home(){
    return(
        <div className="container">
            <div className="home">
                <div className="title">
                    <h2>
                        Bienvenue sur la page de JIRAMA en linge
                    </h2>
                </div>
                <div className="accueil">
                    <div className="image">
                        <img src={Jirama} width="100" height="100" />
                    </div>
                </div>
                <div className="grid">
                   
                    
                    <Link to="/Facture" className="card">
                        <h2>Mes factures &rarr;</h2>
                        <p>Affichage de votre dernière facture.</p>
                    </Link>
                    <Link to="/AutoReleve" className="card">
                        <h2>Auto relevé &rarr;</h2>
                        <p>Relevez vos index pour savoir votre dernière consommation!</p>
                    </Link>
                    <Link to="/Reclamation" className="card">
                        <h2>Incidents &rarr;</h2>
                        <p>
                            Déclarez les incidents rencontres dans votre quartier!
                        </p>
                    </Link>
                    <Link to="/Login" className="card">
                        <h2>Se connecter &rarr;</h2>
                        <p>Connectez-vous avant toute chose!</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}