import { useFormik } from 'formik';
import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

export default function PlaceOrder() {
    const navigate = useNavigate();
    function handlePayment(values) {
        console.log("Payment Submitted", values);
        localStorage.removeItem("cart");
        navigate('/cart');
        toast.success("Your items will be delivered to you in no time")
    }

    const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;

    const validationSchema = object({
        details: string()
            .required("Details are required")
            .min(3, "Minimum length is 3 characters")
            .max(25, "Maximum length is 25 characters"),
        street: string()
            .required("Street is required")
            .min(3, "Minimum length is 3 characters")
            .max(25, "Maximum length is 25 characters"),
        phone: string()
            .required("Phone number is required")
            .matches(phoneRegex, "Enter a valid Egyptian phone number"),
    });

    const formik = useFormik({
        initialValues: {
            details: "",
            street: "",
            phone: "",
        },
        validationSchema,
        onSubmit: handlePayment,
    });

    return (
        <>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <div className="p-4">
                <h4 className=" mb-4  text-[calc(1.325rem+.6vw)] font-semibold">Pay Now</h4>
                <form
                    onSubmit={formik.handleSubmit}
                    className="max-w-[500px] m-auto flex flex-col gap-4"
                >

                    <div className="flex flex-col">
                        <label
                            htmlFor="details"
                            className="text-[20px] font-semibold capitalize"
                        >
                            Details
                        </label>
                        <input
                            type="text"
                            id="details"
                            name="details"
                            placeholder="e.g. Apartment 5B"
                            value={formik.values.details}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="bg-slate-100 border-gray-200 border border-solid rounded px-[10px] py-[5px]"
                        />
                        {formik.touched.details && formik.errors.details && (
                            <p className="text-red-500 text-sm mt-1">
                                *{formik.errors.details}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="street"
                            className="text-[20px] font-semibold capitalize"
                        >
                            Street
                        </label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            placeholder="e.g. Elmwood Avenue, ST"
                            value={formik.values.street}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="bg-slate-100 border-gray-200 border border-solid rounded px-[10px] py-[5px]"
                        />
                        {formik.touched.street && formik.errors.street && (
                            <p className="text-red-500 text-sm mt-1">
                                *{formik.errors.street}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="phone"
                            className="text-[20px] font-semibold capitalize"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="e.g. 01012345678"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="bg-slate-100 border-gray-200 border border-solid rounded px-[10px] py-[5px]"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                *{formik.errors.phone}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                    >
                        Confirm Payment
                    </button>
                </form>
            </div>
        </>
    );
}
