import React from "react";
import  { useEffect, useState } from 'react'

import "./modal.css";



function Modal({ closeModal }) {
    // const [products, setProducts] = useState([]);

    // const getProducts = async () => {
    //     let result = await fetch('http://localhost:5000/products');
    //     result = await result.json();
    //     setProducts(result);
    // }
    // // console.warn("products", products);
    // const deleteProduct = async (id) => {
        
    //     // console.warn(id);
    //     // if(window.confirm('Are you sure to delete this record?')){
    //     let result = await fetch(`http://localhost:5000/product/${id}`, {
    //         method: "Delete"
    //     });
    //     result = await result.json();
    //     if (result) {
    //         getProducts();
    //     }
    //     // }
    // }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="b">
            <div className="b1">
          <button className="button-77"
            onClick={() => {
              closeModal(false);
            }}
            // id="cancelBtn"
          >
            Cancel
          </button>
          </div>

                <div className="b2"><button  className="button-77">Continue</button></div>

        </div>
      </div>
 </div>
  );
}

export default Modal;