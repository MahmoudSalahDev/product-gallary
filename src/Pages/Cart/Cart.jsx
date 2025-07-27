import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success("Item Removed Successfully")
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-semibold text-gray-600">Cart is empty</h2>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <div>
                <h4 className="text-[calc(1.325rem+.6vw)] ">Cart Summary</h4>
                <div className="flex flex-col items-center">
                    <p className='text-[20px] font-semibold'>Num Of Cart Items: {cart.length}</p>
                    <p className='text-[20px] font-semibold'>Total Price: {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)} $</p>
                </div>
                <div className="overflow-x-auto bg-slate-100 p-4">
                    <div className="min-w-[700px] space-y-4">
                        <div className="grid grid-cols-4 gap-4 font-semibold text-[18px] text-center">
                            <p>Product Image</p>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Action</p>
                        </div>
                        {cart.map((prod) => (
                            <div key={prod.id} className="grid grid-cols-4 gap-4 items-center text-center">
                                <Link to={`/products/${prod?.id}`}>
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="rounded-lg max-h-[100px] object-contain mx-auto"
                                    />
                                </Link>
                                <h4>{prod.title}</h4>
                                <p>{prod.price} $</p>
                                <button
                                    onClick={() => removeFromCart(prod.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to={"/placeOrder"} type="button" class="text-white w-full block text-[30px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Place an order</Link>

            </div>
        </>
    );
}
