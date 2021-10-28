import React from 'react'
import './Login.css'

import Jirama from './../images/JIRAMA.png';
import { useHistory } from 'react-router';

export default function Login(){
    let history = useHistory();

    return(
        <div className="Log">
            <div className='bold-line'></div>
            <div className='container'>
                <div className='window_log'>
                    <div className='overlay'></div>
                    <div className='content'>
                        <div className='welcome'><img src={Jirama} width="100" height="100" /></div>
                        <div className='subtitle'>Connectez-vous</div>
                        <div className='input-fields'>
                            <input type='email' placeholder='E-mail' className='input-line full-width'></input>
                            <input type='password' placeholder='Mot de passe' className='input-line full-width'></input>
                        </div>
                        <div><button className='ghost-round full-width'>Se connecter</button></div>
                        <div><button onClick={() => history.push('/Inscription')}  className='ghost-round full-width'>Créer un compte</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
