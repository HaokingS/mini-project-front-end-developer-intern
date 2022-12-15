import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product(){
    const { id } = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState(null)
    
    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if(product){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.title}
                </h1>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.category}
                </div>
                <div>
                    <img
                        src = {product.image}
                        alt = {product.title}
                        width="100" 
                        height="100"
                    >
                    </img>
                </div>
                <div>
                    {product.description}
                </div>
                <div className="font-bold">
                    <p>Rating:</p>{product.rating.rate}
                </div>
                <div className="font-bold">
                    <p>Sold:</p>
                    {product.rating.count}
                </div>
            </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product