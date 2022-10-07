/* eslint-disable @next/next/no-img-element */

import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import Link from 'next/link'

function doc1() {
    return (
        <ContainerBlock title="How to select that where do you want to go?">
            <span className='cursor-pointer rounded-lg ml-16'><Link href="/docs">← Back</Link></span>
            <div className='container'>
                <h1 className='font-bold text-4xl ml-14 mt-6 mb-6 mr-14'>How to select that where do you want to go?</h1>

                <p className='mx-14 mb-6'>Step 1</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027916362540130325/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img1' />
                <p className='mx-14 mb-6 text-center text-gray-300'>To get started with going to your desired location you first have to enter your address (not completely) in the box labelled as Start in the top-right box of the screen.</p>

                <p className='mx-14 mb-6'>Step 2</p> 
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027919577277009983/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img3' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Then click enter to get the autosuggestions, then click in on of the suggestions of your choice to get your route.</p>

                <p className='mx-14 mb-6'>Step 3</p> 
                <p className='mx-14 mb-6 text-center text-gray-300'>Repeat the same thing in the end field as well.</p>

                <h1 className='text-3xl font-semibold mb-6 text-center'>The End.</h1>
                <button className='button px-6 py-2 rounded-md block mx-auto my-auto mb-6'><a href='how-to-change-color-theme-to-dark'>Next Page</a></button>
            </div>
        </ContainerBlock>
    )
}

export default doc1 