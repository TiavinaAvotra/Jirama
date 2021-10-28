import React from 'react'
import './NavBar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        
                <section className="menu menu--circle">
                    <input type="checkbox" id="menu__active" />
                    <label for="menu__active" className="menu__active">
                        <div class="menu__toggle">
                            <div className="icon">
                                <div className="hamburger"></div>
                            </div>
                        </div>
                        <input className="arrow" type="radio" name="arrow--up" id="degree--up-0" />
                        <input className="arrow" type="radio" name="arrow--up" id="degree--up-1" />
                        <input className="arrow" type="radio" name="arrow--up" id="degree--up-2" />
                        <div className="menu__listings">
                            <ul className="circle">
                                <li>
                                    <div className="placeholder">
                                        <div className="upside">
                                            <Link to="/Login" className="button"><FontAwesomeIcon icon={["fas", "user"]} size="sm"/></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="placeholder">
                                        <div className="upside">
                                            <Link to="/" className="button"><FontAwesomeIcon icon={["fas", "directions"]} size="sm"/></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="placeholder">
                                        <div className="upside">
                                            <Link to="#"><FontAwesomeIcon icon={["fas", "comment"]} size="sm"/></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="placeholder">
                                        <div className="upside">
                                            <Link to="/AutoReleve" className="button"><FontAwesomeIcon icon={["fas", "comment"]} size="sm"/></Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="placeholder">
                                        <div className="upside">
                                            <Link to="/Reclamation" className="button"><FontAwesomeIcon icon={["fas", "envelope"]} size="sm"/></Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="menu__arrow menu__arrow--top">
                            <ul>
                                <li>
                                    <label for="degree--up-0"><div className="arrow"></div></label>
                                    <label for="degree--up-1"><div className="arrow"></div></label>
                                    <label for="degree--up-2"><div className="arrow"></div></label>
                                </li>
                            </ul>
                        </div>
                    </label>
                </section>
        
    )
}
