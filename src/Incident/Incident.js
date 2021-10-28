import React from 'react'
import './Incident.css'

export default function Incident(){
    return(
        <div className="footer">
            <form className="form">
                <h3>CONTACTER NOUS</h3>
                <p type="Quartier:"><input type="text"/></p>
                <p type="E-mail:"><input type="email"/></p>
                <p type="Message:"><input type="text"/></p>
                <button>Envoyer</button>
            </form>
        </div>
    )
}
