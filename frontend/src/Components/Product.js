import React from 'react';
import {useNavigate} from 'react-router-dom'



const Addproduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    const addproduct = async ()=>{
        // console.warn(name,price,category,company);
        if(!name || !price|| !category|| !company){
            setError(true);
            return false;
        }

        const userID = JSON.parse(localStorage.getItem('users'))._id;
        // console.warn(userID);
        let result = await fetch("http://localhost:5000/add-product",{
            method: 'post',
            body: JSON.stringify({name,price,category,userID,company}),
            headers:{
                "Content-Type":"application/json"
            }

        });

        result = await result.json();
        console.warn(result);
        navigate('/');

    }

    return(
        <div className='product'>
            <h1>Add product</h1>
            <input className='inputBox' type = "text" placeholder = "Enter Product Name"
            value = {name} onChange = {(e)=>{setName(e.target.value)}}
            />
            {error && !name &&<span className='valid'>Enter valid name</span>}

            <input className='inputBox' type = "text" placeholder = "Enter Product Price"
            value = {price} onChange = {(e)=>{setPrice(e.target.value)}}
            />
            {error && !price &&<span className='valid'>Enter Price format</span>}
            <input className='inputBox' type = "text" placeholder = "Enter Product Category"
            value = {category} onChange = {(e)=>{setCategory(e.target.value)}}
            />
            {error && !category &&<span className='valid'>Enter valid Category name</span>}

            <input className='inputBox' type = "text" placeholder = "Company of the product"
            value = {company} onChange = {(e)=>{setCompany(e.target.value)}}
            />
            {error && !company &&<span className='valid'>Enter valid Company name</span>}
            <button onClick={addproduct} className='button-69'  type = "button" >Add product</button>
        </div>
    )
}

export default Addproduct;
