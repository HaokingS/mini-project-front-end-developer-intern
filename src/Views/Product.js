import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product(){
    const { id } = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    })
    
    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false,
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true,
                })
            })
    }, [url])
    
    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.title}
                </h1>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.category}
                </div>
                <div>
                    <img
                        src = {product.data.image}
                        alt = {product.data.title}
                        width="100" 
                        height="100"
                    >
                    </img>
                </div>
                <div>
                    {product.data.description}
                </div>
                <div className="font-bold">
                    <p>Rating:</p>{product.data.rating.rate}
                </div>
                <div className="font-bold">
                    <p>Sold:</p>
                    {product.data.rating.count}
                </div>
            </div>
    }
    
    return(
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product