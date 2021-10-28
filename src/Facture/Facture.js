import React from 'react'
import './Facture.css'
import Jirama from './../images/JIRAMA.png';
export default function Facture(){
  return (
    <div class="container">
      <img className="center" src={Jirama} width="100" height="100" />
      <h2>Factures JIRAMA</h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Nom</div>
          <div class="col col-2">Prénom(s)</div>
          <div class="col col-3">Index ELEC</div>
          <div class="col col-4">Index EAU</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42235</div>
          <div class="col col-2" data-label="Customer Name">John Doe</div>
          <div class="col col-3" data-label="Amount">$350</div>
          <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
      </ul>
    </div>

    )
}
