import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function creators() {
    return (
        <ContainerBlock title="Creators">
            <h1 className='text-5xl text-center pb-5 pt-5 wonderful-text font-semibold'>Creators</h1>
            <div class="max-w-sm w-full lg:max-w-full lg:flex pt-5 pb-5">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: '/img/card-left.jpg' }} title="Woman holding a mug">
            </div>
            <div class="green-glassmorph rounded-lg p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                <div class="flex items-center">
                <img class="w-14 h-14 rounded-full mr-4 mb-2" src="https://cdn.discordapp.com/attachments/910730837996224584/1027838654208552960/unknown.png" alt="Avatar" />
                </div>
                <div class="text-gray-200 font-bold text-xl mb-2">Siddharth Sharma</div>
                <p class="text-gray-300 text-base w-[58rem]">I am a school student addicted to programming. I like to create your experience at web memorable. Currently I am learning React and wish to become a full stack developer this year.</p>
                </div>
            </div>
            </div>

            <div class="max-w-sm w-full lg:max-w-full lg:flex pt-3 pb-8">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: '/img/card-left.jpg' }} title="Woman holding a mug">
            </div>
            <div class="green-glassmorph rounded-lg p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                <div class="flex items-center">
                <img class="w-14 h-14 rounded-full mr-4 mb-2" src="https://cdn.discordapp.com/attachments/910730837996224584/1027839118350237706/Masterpiece-modified.png" alt="Avatar" />
                </div>
                <div class="text-gray-200 font-bold text-xl mb-2">Supriyo Ghosh</div>
                <p class="text-gray-300 text-base w-[58rem]">I am a school student addicted to programming. I like to create your experience at web memorable. Currently I am learning React and wish to become a full stack developer this year.</p>
                </div>
            </div>
            </div>
        </ContainerBlock>
    )
}