import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';



export function Product(){

    const [details,setdetails]=useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=20')
        .then(response=>response.json())
        .then(json=>setdetails(json))
    },[])


    return(
    <>
    <div className='row mt-5'>
        <div className="col-lg-1">&nbsp;</div>
        <div className='col-lg-10'>
            <table className="table table-bordered" width="100%">
                <thead>
                <tr>
                    <th>Product image</th>
                    <th>Product name</th>
                    <th>Product description</th>
                    <th>Product rating </th>
                    <th>Product category</th>
                    <th>Product count</th>
                    <th>Product count</th>
                </tr>
                </thead>
                <tbody>
                    {
                    details.map((value,index)=>(
                        <tr>
                            <td><img src={value.image} className="img-fluid"/></td>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>{value.rating.rate}</td>
                            <td>{value.category}</td>
                            <td>{value.rating.count}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
        <div className="col-lg-1">&nbsp;</div>
        
    </div>
    </>);
}