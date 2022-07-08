import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
const UpdateProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    // const [error,setError] = React.useState(false);
    const params = useParams();
    const n = useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async ()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }


    const updateproduct = async ()=>{
        console.warn(name,price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result  = await result.json()
        console.warn(result)
        n('/')

    };

    return(
        <div className='product'>
            <h1>Update product</h1>
            <input className='inputBox' type = "text" placeholder = "Enter Product Name"
            value = {name} onChange = {(e)=>{setName(e.target.value)}}
            />
            {/* {error && !name &&<span className='valid'>Enter valid name</span>} */}

            <input className='inputBox' type = "text" placeholder = "Enter Product Price"
            value = {price} onChange = {(e)=>{setPrice(e.target.value)}}
            />
            {/* {error && !price &&<span className='valid'>Enter Price format</span>} */}
            <input className='inputBox' type = "text" placeholder = "Enter Product Category"
            value = {category} onChange = {(e)=>{setCategory(e.target.value)}}
            />
            {/* {error && !category &&<span className='valid'>Enter valid Category name</span>} */}

            <input className='inputBox' type = "text" placeholder = "Company of the product"
            value = {company} onChange = {(e)=>{setCompany(e.target.value)}}
            />
            {/* {error && !company &&<span className='valid'>Enter valid Company name</span>} */}
            <button onClick={updateproduct} className='appButton'  type = "button" >Update product</button>
        </div>
    )
}

export default UpdateProduct;