import React from 'react';
import './Releve.css';

import { useHistory } from 'react-router';

import Jirama from './../images/JIRAMA.png';

export default function Releve(){
    let history = useHistory();

    return(
        <div>
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <img src={Jirama} width="100" height="100" />
                                    <span>AUTO RELEVE</span>
                                </div>
                                <div class="app-contact">CONTACT INFO : 3547</div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class='input-fields'>
                                        <input type='text' placeholder='Email' class='input-line full-width'></input>
                                        <input type='email' placeholder='Index ELEC.' class='input-line full-width'></input>
                                        <input type='password' placeholder='Index EAU' class='input-line full-width'></input>
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button onClick={() => history.push('/')} class="app-form-button">Retour</button>
                                        <button class="app-form-button">Envoyer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
