/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import Link from 'next/dist/client/link'

function doc3() {
    return (
        <ContainerBlock title="How to go from a specific direction of your choice to your destination?">
            <span className='cursor-pointer rounded-lg ml-16'><Link href="/docs">← Back</Link></span>
            <div className='container'>
                <h1 className='font-bold text-4xl ml-14 mt-6 mb-6 mr-14'>How to go from a specific direction of your choice to your destination?</h1>

                <p className='mx-14 mb-6'>Step 1</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027924258992705588/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img1' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Click on the (+) button under the two fields in the box at the top-right side of the screen to add a new field between the two fields.</p>

                <p className='mx-14 mb-6'>Step 2</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027924859499593738/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img2' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Then enter the route via which you want to go to your destination, then press enter in your keyboard to get the autosuggestions then click in one of those autousuggestions of your choice!</p>

                <h1 className='text-3xl font-semibold mb-6 text-center'>The End.</h1>
                <button className='button px-6 py-2 rounded-md block mx-auto my-auto mb-6'><a href='how-to-zoom-in-or-out'>Next Page</a></button>
            </div>
        </ContainerBlock>
    )
}

export default doc3