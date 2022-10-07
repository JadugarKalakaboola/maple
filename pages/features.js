import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function Features() {
    return (
        <ContainerBlock title="Features">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg green-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027870562074243152/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Correct Routes</div>
                <p className="text-gray-300 text-base text-center py-3">
                We try to provide you with the <span className='text-green-500'>best routes</span>, and provide you the best experience.
                </p>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg blue-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027871281166684191/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Dark and Light themes</div>
                <p className="text-gray-300 text-base text-center py-3">
                    Our UI is pleasing to eyes with its modern look and dark and light themes.
                </p>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg green-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027871527154237440/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Cost calculator</div>
                <p className="text-gray-300 text-base text-center py-3">
                <span className='text-green-600'>Cost efficiency</span> is a major part of your journey, and we go it covered for you.
                </p>
            </div>
            </div>
        </div>

        <div className="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg blue-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027871728011051069/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Calculates distance and time</div>
                <p className="text-gray-300 text-base text-center py-3">
                Our map provides you with  <span className='text-green-600 font-semibold'>exact distance and time.</span> So that you can choose the best routes
                </p>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg green-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027872032228118638/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Detailed directions</div>
                <p className="text-gray-300 text-base text-center py-3">
                    We provide you detailed instructions for every route so that you never miss a turn.
                </p>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg blue-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027872702603743242/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Via which route?</div>
                <p className="text-gray-300 text-base text-center py-3">
                Want to go from a specific route to your destination of your choice? We got it <span className='text-green-500 font-semibold'>covered</span> for you!
                </p>
            </div>
            </div>
        </div>

        <div className="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg green-glassmorph">
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027876288687513650/unknown.png' className='h-52 w-full'/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">Auto Suggestions</div>
                <p className="text-gray-300 text-base text-center py-3">
                    Our auto-suggestions feature improves the search quality and saves time of your search.
                </p>
            </div>
            </div>
        </div>
        </ContainerBlock>
    )
}