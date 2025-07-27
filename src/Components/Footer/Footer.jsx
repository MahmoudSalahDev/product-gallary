import amazonLogo from "../../assets/amazon-pay.png"
import americanLogo from "../../assets/American-Express-Color.png"
import masterCardLogo from "../../assets/mastercard.webp"
import paypalLogo from "../../assets/paypal.png"
import appStoreLogo from "../../assets/get-apple-store.png"
import googlePlayLogo from "../../assets/get-google-play.png"


export default function Footer() {
    return (
        <>
            <footer className="bg-slate-100 py-8 px-[20px]">
                <div className="container space-y-4">
                    <header>
                        <h2 className="text-xl font-semibold text-slate-800">Get the Product Gallary App</h2>
                        <p className="text-slate-400">We will send you a link, open it on your phone to download the app</p>
                    </header>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <input type="email" className="px-[10px] rounded-md grow" placeholder="Email Address" />
                        <button className="btn text-sm uppercase bg-indigo-800 hover:bg-indigo-900 text-white font-semibold">Share App Link</button>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center py-4 border-y-2 border-slate-400 border-opacity-50">
                        <div className="payment-partners flex gap-3 items-center">
                            <h3>Payment Partners</h3>
                            <div className="flex flex-col sm:flex-row gap-3 items-center">
                                <img className="w-24" src={amazonLogo} alt="" />
                                <img className="w-24" src={americanLogo} alt="" />
                                <img className="w-20" src={masterCardLogo} alt="" />
                                <img className="w-24" src={paypalLogo} alt="" />
                            </div>

                        </div>
                        <div className="download flex gap-3 items-center">
                            <h3>Get deliveries with FreshCart</h3>
                            <img className="w-24" src={appStoreLogo} alt="" />
                            <img className="w-[110px]" src={googlePlayLogo} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}