import Link from 'next/link'

export default function Navbar(){
    return(
        <div className="py-5">
            <ul className="lg:flex justify-between w-9/12 text-center text-base lg:w-7/12 mx-auto py-5 text-gray-200 glassmorph rounded-md lg:px-36">
                <li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer"><Link href="/">Home</Link></li>
                <li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer"><Link href="/map">Map</Link></li>
                <li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer"><Link href="/features">Features</Link></li>
                <li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer"><Link href="/creators">Creators</Link></li>
                <li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer"><Link href="/docs">Docs</Link></li>
            </ul>
        </div>
    )
}