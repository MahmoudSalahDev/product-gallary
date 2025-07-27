import axios from "axios";
import hero from "../../assets/home.png"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Loading from "../../Components/Loading/Loading.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    async function getProducts() {
        try {
            setLoading(true);
            let { data } = await axios.get(`https://fakestoreapi.com/products`);

            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="hero flex flex-col sm:flex-row items-center lg:gap-[400px] md:gap-[200px] justify-center">
                <div className="order-2 sm:order-1">
                    <h2 className="text-[calc(1.325rem+.9vw)] font-bold text-indigo-600">Discover Deals You Love</h2>
                    <p>Shop the latest trends with ease. Fast delivery, secure checkout, and great deals every day.</p>
                </div>
                <img src={hero} alt="" className="max-w-[200px] md:max-w-[300px] order-1 sm:order-2" />
            </div>
            <div className="slider mt-6">
                <Slider {...settings}>
                    {products?.map((product) => {
                        return <Link to={`/products/${product?.id}`} className="photo" key={product?.id}>
                            <img src={product?.image} alt="" className="h-[200px] w-full object-contain" /></Link>
                    })}

                </Slider>
            </div>
            <div className="flex justify-center mt-[50px]">
                <Link to={"/products"} type="button" class="text-white text-[40px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Shop Now</Link>

            </div>
        </>
    )
}
