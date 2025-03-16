import Navbar from "../components/Navbar"
export default function Confirmation(){
    return(
        <div className="bg-slate-50 min-h-screen"><Navbar/>
           <div className="flex flex-col items-center justify-center text-center"> 
            <div className="text-5xl font-bold italic text-blue-500 pt-32">Thank you for Shopping!!!</div>
            <div className="my-10">Your order will be delivered in 3 business days</div>
            </div>
        </div>
    )
}