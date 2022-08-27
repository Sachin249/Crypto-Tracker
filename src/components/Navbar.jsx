import React from 'react';
import {Link} from "react-router-dom";
import { CryptoState } from './CrypoContext';
function Navbar()
{
    const {currency , setCurrency} = CryptoState();
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background:"#0D296F"}}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Crypto Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <select className="" value={currency} onChange={(e)=>{setCurrency(e.target.value)}}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
            </select>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar;