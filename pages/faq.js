import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function Faq() {
    return (
        <ContainerBlock title="Documentations">
        <div className="p-6 mb-10 mt-8 w-9/12 mx-auto rounded-lg border shadow-md blue-glassmorph">
            <a href="faq/searching-routes">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">How to search routes?</h5>
            </a>
            <a href="faq/searching-routes" className="inline-flex items-center py-2 mt-3 px-3 text-sm font-medium text-center text-white button rounded-lg focus:ring-4 focus:outline-none">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>

        <div className="p-6 mb-10 mt-8 w-9/12 mx-auto rounded-lg border shadow-md green-glassmorph">
            <a href="faq/changing-themes">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">How to change color theme to dark?</h5>
            </a>
            <a href="faq/changing-themes" className="inline-flex items-center py-2 mt-3 px-3 text-sm font-medium text-center text-white button rounded-lg focus:ring-4 focus:outline-none">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>

        <div className="p-6 mb-10 mt-8 w-9/12 mx-auto rounded-lg border shadow-md blue-glassmorph">
            <a href="faq/how-to-zoom-in-or-out">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">How to zoom in or out?</h5>
            </a>
            <a href="faq/how-to-zoom-in-or-out" className="inline-flex items-center py-2 mt-3 px-3 text-sm font-medium text-center text-white button rounded-lg focus:ring-4 focus:outline-none">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        </ContainerBlock>
    )
}
