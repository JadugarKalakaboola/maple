import Link from "next/link"

export default function Navbar(){
    return(
        <div className="py-5">
            <ul className="lg:flex justify-between w-9/12 text-center text-base cursor-pointer lg:w-7/12 mx-auto py-5 text-gray-200 glassmorph rounded-md lg:px-36">
                <Link href={{pathname: '/'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Home</li></Link>
                <Link href={{pathname: '/map'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Map</li></Link>
                <Link href={{pathname: '/features'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Features</li></Link>
                <Link href={{pathname: '/creators'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Creators</li></Link>
                <Link href={{pathname: '/faq'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">FAQ</li></Link>
            </ul>
        </div>
    )
}