/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import Link from 'next/dist/client/link'

function doc2() {
    return (
        <ContainerBlock title="How to change color theme to dark?">
            <span className='cursor-pointer rounded-lg ml-16'><Link href="/faq">← Back</Link></span>
            <div className='container'>
                <h1 className='font-bold text-4xl ml-14 mt-6 mb-6 mr-14'>How to change color theme to dark?</h1>

                <p className='mx-14 mb-6'>Step 1</p>
                <img src='https://cdn.discordapp.com/attachments/910730837996224584/1027922910700109824/unknown.png' className='block mx-auto my-auto mb-6 rounded-lg border-solid border-green-600 border-4' alt='img1' />
                <p className='mx-14 mb-6 text-center text-gray-300'>Click on the moon at the top-left side of the screen to change the theme of the website to dark.</p>

                <button className='button px-6 py-2 rounded-md block mx-auto my-auto mb-6'><Link href={{pathname: '/faq/how-to-zoom-in-or-out'}}>Next page</Link></button>
            </div>
        </ContainerBlock>
    )
}

export default doc2