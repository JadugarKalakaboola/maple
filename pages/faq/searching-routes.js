/* eslint-disable @next/next/no-img-element */

import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import Link from 'next/link'

function doc1() {
    return (
        <ContainerBlock title="How to select that where do you want to go?">
            <span className='cursor-pointer rounded-lg ml-16'><Link href="/faq">← Back</Link></span>
            <div className='container'>
                <h1 className='font-bold text-4xl ml-14 mt-6 mb-6 mr-14'>How to search routes?</h1>

                <p className='mx-14 mb-6 text-center text-gray-300'>Start typing your current location in the first field, press enter to get suggestions. Next write your destination in the second input field and press enter. Click on the plus icon to add a stop in between or to add multiple destinations.</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027916362540130325/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img1' />
 
                <button className='button px-6 py-2 rounded-md block mx-auto my-auto mb-6'><Link href={{pathname: '/faq/changing-themes'}}>Next page</Link></button>
            </div>
        </ContainerBlock>
    )
}

export default doc1 