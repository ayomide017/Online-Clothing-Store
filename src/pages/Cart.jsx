import React from "react";
import cartImg from "../assets/cart-img.png";
import { FaAngleLeft , FaAngleRight, FaPlus, FaMinus} from "react-icons/fa";
import { Button } from "../components/Button";

export const Cart = ()=>{
    return(
    <section>
        <div className="container">
               <div className="cart">
                <div className="cart__img">
                    <img src={cartImg}/>
                    <span className="cart__angle cart__angle-left"> <FaAngleLeft/> </span>
                    <span className="cart__angle cart__angle-right"><FaAngleRight/> </span>
                </div>
                <div className="cart__content stack">
                    <h3 className="cart__title">Padded Jacket Coat</h3>
                    <p className="cart__text">Padded jacket made with thick soft material sewn into section,its a warm hip-length or waist-length coat It is filled with synthetic poly fill material.</p>
                     <div className="cart__detail">
                        <span className="cart__rate"> (4.5) </span>
                        <span className="cart__rate-count"> 425 Reviews </span>
                        <span className="cart__sale"> 1213</span>
                     </div>

                     <div className="cart__pricing">
                        <span className="cart__actual-price">$70.00  </span>
                        <span className="cart__discount-price">  $69.99 </span>
                        <span className="cart__save"> (Save: $10)</span>
                     </div>

                     <div className="cart__sizing">
                     <h4 >Select Size: Medium</h4>
                     
                        <div className="cart__size">
                        <div>S</div>
                     <div className="cart__size-selected">M</div>
                     <div>L</div>
                     <div>XL</div>
                     <div>XXL</div>
                        </div>
                     
                     </div>
                     <div className="cart__coloring">
                        <h4>Select Color: Black</h4>
                     </div>

                     <div className="cart__counter">
                        <FaMinus/>
                         <span>1</span>
                        <FaPlus/>

                     </div>
                     <div className="cart__btn">
                        <Button text="Add to Cart " className="btn-bg"/>
                        <Button text="Add to Watchlist" className="btn-br"/>
                     </div>
                </div>
               </div>
        </div>
    </section>
    )
}