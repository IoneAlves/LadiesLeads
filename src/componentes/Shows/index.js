import React from "react";
import './style.css'
import Card from "../Card";

function Shows () {
    return(
        <section className="shows">
            <div className='shows_content shows_content_cta shows_content_cta_bg'>
                <h3 className='shows_content_cta_title'>tv shows with female leadership</h3>
                <p>See some of the most beloved tv shows airing nowadays with great girl power!</p>
            </div>
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
            <div className='shows_content shows_content_cta'>
                <a className='shows_content_cta_link' href="">choose yours</a>
            </div>
        </section>
    );
};

export default Shows;