import React from "react";
import { Link } from 'react-router-dom';
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
                    <Card style='card_content img1_front img1_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img2_front img2_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img3_front img3_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img4_front img4_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img5_front img5_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img6_front img6_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img7_front img7_front_hover' hover='card_content_transparency'/>
                    <Card style='card_content img8_front img8_front_hover' hover='card_content_transparency'/>             
                </div>
            </div>
            <div className='shows_content shows_content_cta'>
                <Link className='shows_content_cta_link' to='/search'>Find Your Show</Link>                
            </div>
        </section>
    );
};

export default Shows;