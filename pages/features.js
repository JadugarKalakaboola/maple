import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function features() {
    return (
        <ContainerBlock title="Features">
            <h1 className='text-5xl text-center pb-5 pt-5 font-semibold'>Did someone said <span className='text-green-600'>Features?</span></h1>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="rounded overflow-hidden shadow-lg green-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Correct Routes</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-600'>Good</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> Our maple will never tell you a <span className='text-red-500 font-semibold'>lie</span> regarding to routes, because we do not like to <span className='text-red-500 font-semibold'>scam</span> our customers!
                </p>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg blue-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Dark and Light mode</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-500'>Excellent</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> Is your eyes hurting after using light mode? well, we have a <span className='font-semibold text-green-600'>dark</span> mode as well! Because we <span className='font-semibold text-green-600'>care</span> about our customers!
                </p>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg green-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Cost calculator</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-600'>Good</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> Want to know the <span className='text-green-600'>cost</span> for travelling in the given position? well, we got it <span className='text-green-600'>solved</span> for you!
                </p>
            </div>
            </div>
        </div>

        <div class="px-10 pb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="rounded overflow-hidden shadow-lg blue-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Distance calculator</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-500'>Excellent</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> It is a common feature to know the distance of the destination, but it is very <span className='text-green-600 font-semibold'>important.</span>
                </p>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg green-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Exact Turns</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-500'>Excellent</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> It is very important to know that from where to take turns and when to take turns and our system does it quite <span className='font-semibold text-green-600'>nicely!</span>
                </p>
            </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg blue-glassmorph">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Via which route?</div>
                <p class="text-gray-300 text-base text-center">
                <strong>Status :</strong> <span className='text-green-500'>Excellent</span>
                </p>
                <p class="text-gray-300 text-base text-center py-3">
                <strong>Definition :</strong> Want to go from a specific route to your destination of your choice? We got it <span className='text-green-500 font-semibold'>covered</span> for you!
                </p>
            </div>
            </div>
        </div>
        </ContainerBlock>
    )
}