import React from "react";
import {Link} from "react-router-dom"
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";


export const ProductCard =(props)=>{
    return(
        <article className="products__card">
            <div className="products__img">
                <img src={props.item.img}/>
            </div>
            <div className="products__content stack">
                <div className="products__content--upper">
                   <p className="products__name">{props.item.name}</p>
                   
                   <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                   <span  className="products__rating">{props.item.rating} </span>
                   <FaStar style={{color: "yellow", marginLeft: "5px"}}/>
                   </div>
                </div>

                <div className="products__content--lower">  
                <span className="products__actual-price">{props.item.actualPrice}</span>
                    <span className="products__discount-price">{props.item.discountPrice}</span>

                    
                </div>

               <Link to="/cart">
               <Button className="btn-br" text="Add to cart"/>
               </Link>
            </div>
            
        </article>
    )
}