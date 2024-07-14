import React, { useEffect, useState } from "react";
import { useCartStore } from "../store/cart";

import {ProductCard} from "./ProductCard";
import Pagination from "./Pagination";
import { Button } from "./Button";

export const Products = ({ initialPage = 1 }) => {
    // const { products, setPage, currentPage, totalPages, pageSize } = props;

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(initialPage);

    const {updateCart} = useCartStore()

   
   const handleAddToCart = (product) => {
    updateCart({...product, quantity: 1})
   }


    useEffect(()=>{
        setLoading(true);
        setError(null)
        
       const URL = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=a52557c210d74e21bcc0cdd12418b641&reverse_sort=false&page=${page}&size=4&Appid=64T060XLW2WAWI0&Apikey=52280394a72741fcabd8841362e615cd20240712161453950230`
       
        
           const fetchData =  async ()=>{
             
       
              try {
               const response =  await fetch(URL);
               //check if the res is successful
       
               if(!response.ok){
                 throw new Error(`HTTP error! status: ${response.status}`)
               }
       
               const result = await response.json();
               setProducts(result)
               console.log(result);
              } catch (error) {
               setError(error.message)
              } finally {
               setLoading(false)
              }
           };
           fetchData()
         },[page])
       
       
         // Conditional rendering based on the state
         if (loading) {
           return <div>Loading...</div>;
         }
       
         if (error) {
           return <div>Error: {error}</div>;
         }
  

  
  return (
    <>
      <div className="subheading">
        <h2 className="subheading__title">Our Product</h2>
      </div>
      <div className="products">
        {products.items.map((product, index) => (
          <ProductCard key={product?.id} product={product} handleAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>

      <Pagination
       currentPage={page}
       totalPages={products.total}
       pageSize={products.size}
       onPageChange={(current) => setPage(current)}
      />
      <Button className="btn-all" text="See All" />
    </>
  );
};
