import React from "react";
import './style.css'
import Card from "../Card";

function Shows () {
    return(
        <section className="shows">
            <div className="container shows_section">
                <div className="shows_content">
                    {/* fazer uma estrtura de repetição para os cards... importando as imagens */}
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>                   
                </div>
            </div>
        </section>
    );
};

export default Shows;