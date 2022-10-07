import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContainerBlock({ children }){
    return(
        <div className="gradient-bg min-h-screen text-gray-100">
            <div className="py-5">
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}