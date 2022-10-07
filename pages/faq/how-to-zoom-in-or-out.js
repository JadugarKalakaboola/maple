import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import Link from 'next/dist/client/link'

function doc4() {
    return (
        <ContainerBlock title="How to zoom in or out?">
            <span className='cursor-pointer rounded-lg ml-16'><Link href="/faq">← Back</Link></span>
            <div className='container'>
            <h1 className='font-bold text-4xl ml-14 mt-6 mb-6 mr-14'>How to go from a specific direction of your choice to your destination?</h1>
            <h1 className='font-bold text-3xl ml-14 mt-6 mb-6 mr-14'>Zoom out</h1>
                <p className='mx-14 mb-6'>Step 1</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027925819277987951/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img1' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Click on the (-) button located in the top-left side of the screen under the (+) button to zoom out.</p>

                <h1 className='font-bold text-3xl ml-14 mt-6 mb-6 mr-14'>Zoom In</h1>
                <p className='mx-14 mb-6'>Step 1</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027926461681762314/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img2' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Click on the (+) button located in the top-left side of the screen above the (-) button to zoom in.</p>

            </div>
        </ContainerBlock>
    )
}

export default doc4