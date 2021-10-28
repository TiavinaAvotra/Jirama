import React from 'react'
import './Create.css'

import Jirama from './../images/JIRAMA.png';


export default function Create(){
    

    return(
        <div className="create">
            <div className='bold-line'></div>
            <div className='container'>
                <div className='window'>
                    <div className='overlay'>
                        <div className='content'>
                            <div className='welcome'><img src={Jirama} width="100" height="100" /></div>
                            <div className='subtitle'>Inscrivez-vous!</div>
                            <div className='input-fields'>
                                <input type='text' placeholder='Nom' className='input-line full-width'></input>
                                <input type='text' placeholder='Prénom(s)' className='input-line full-width'></input>
                                <input type='email' placeholder='E-mail' className='input-line full-width'></input>
                                <input type='string' placeholder='Référence compteur' className='input-line full-width'></input>
                                <input type='string' placeholder='Référence client' className='input-line full-width'></input>
                                <input type='text' placeholder='Adresse' className='input-line full-width'></input>
                                <input type='password' placeholder='Mot de passe' className='input-line full-width'></input>
                                <input type='password' placeholder='Confirmer votre mot de passe' className='input-line full-width'></input>
                            </div>
                            <div><button className='ghost-round full-width'>Créer</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}