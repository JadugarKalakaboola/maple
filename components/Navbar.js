export default function Navbar(){
    return(
        <div className="py-5">
            <ul className="lg:flex justify-between w-9/12 text-center text-base cursor-pointer lg:w-7/12 mx-auto py-5 text-gray-200 glassmorph rounded-md lg:px-36">
                <li className="hover:text-gray-400">Home</li>
                <li className="hover:text-gray-400">Map</li>
                <li className="hover:text-gray-400">Features</li>
                <li className="hover:text-gray-400">Docs</li>
            </ul>
        </div>
    )
}