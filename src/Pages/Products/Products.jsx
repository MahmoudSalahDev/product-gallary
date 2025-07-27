import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading.jsx';
import { Helmet } from 'react-helmet';

export default function Products() {
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        try {
            setLoading(true);
            let { data } = await axios.get(`https://fakestoreapi.com/products`);
            setProducts(data);
            setFiltered(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getProducts()
    }, [])

    function handleSearch(e) {
        const keyword = e.target.value.toLowerCase()
        if (keyword.trim() === "") {
            setFiltered(products)
        } else {
            const result = products.filter(product =>
                product.title.toLowerCase().includes(keyword)
            )
            setFiltered(result)
        }
    }

    const [sortOption, setSortOption] = useState("");
    function handleSort(e) {
        const value = e.target.value;
        setSortOption(value);
        let sortedProducts = [...filtered];
        if (value === "priceLowToHigh") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === "priceHighToLow") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (value === "nameAZ") {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        }
        setFiltered(sortedProducts);
    }


    if (loading) {
        return (
            <Loading />
        );
    }


    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <div className=" flex flex-col sm:flex-row  mx-auto">
                <div className='flex sm:w-[200px] flex-col bg-slate-100 p-[10px] '>
                    <input
                        type="search"
                        placeholder="Search products..."
                        className='w-full h-[50px]  border border-gray-300 rounded-md py-2 px-4'
                        onInput={handleSearch}
                    />
                    <span className='text-[20px] mt-4'>Sort by:</span>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="sort"
                            id="priceLowToHigh"
                            value="priceLowToHigh"
                            onChange={handleSort}
                            checked={sortOption === "priceLowToHigh"}
                        />
                        <label htmlFor="priceLowToHigh">Price (low to high)</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="sort"
                            id="priceHighToLow"
                            value="priceHighToLow"
                            onChange={handleSort}
                            checked={sortOption === "priceHighToLow"}
                        />
                        <label htmlFor="priceHighToLow">Price (high to low)</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="sort"
                            id="name"
                            value="nameAZ"
                            onChange={handleSort}
                            checked={sortOption === "nameAZ"}
                        />
                        <label htmlFor="name">Name (A - Z)</label>
                    </div>
                </div>
                <div className="grid flex-1  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {filtered.map((product) => (
                        <div className="h-full" key={product.id}>
                            <div className="card p-5 shadow-md flex flex-col h-full rounded-md">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-60 w-full object-contain"
                                    />
                                </Link>
                                <div className="caption mt-4 flex-grow">
                                    <h3 className="text-[18px] font-semibold capitalize line-clamp-1">
                                        {product.title}
                                    </h3>
                                    <h4 className="text-gray-700 mt-2 text-[15px] font-semibold">
                                        {product.price} $
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
