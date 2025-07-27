import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    async function getProductDetails() {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    function handleAddToCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const alreadyInCart = cart.find(item => item.id === product.id);
        if (!alreadyInCart) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            toast.success("Product added to cart!")
        } else {
            toast.success("Product is already in cart.")
        }
    }

    return (
        <>
            <Helmet>
                <title>Product Detials</title>
            </Helmet>
            <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="w-full md:w-1/4 p-2">
                    <div>
                        <img src={product?.image} className="w-full" alt="" />
                    </div>
                </div>
                <div className="md:w-3/4">
                    <div className="p-5">
                        <h4 className="text-2xl">{product?.title}</h4>
                        <p className="text-xl text-gray-500">{product?.description}</p>
                        <span className="font-bold text-indigo-500">{product?.category}</span>
                        <div className="row justify-between">
                            <span className='text-[25px] font-semibold'>{product?.price} $</span>
                            <span>
                                <i className="fa-solid fa-star text-yellow-300 mr-2"></i>
                                {product?.rating?.rate}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleAddToCart}
                                className="btn w-full text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
