import React from "react";
import '../App.css';

const year = new Date().getFullYear();

function Footer(){
    return (
    <footer>
        <p>Copyright Alexis, {year}</p>
    </footer>
    );
}

export default Footer;