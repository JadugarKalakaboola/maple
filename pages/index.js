import Head from 'next/head'
import Image from 'next/image'
import ContainerBlock from '../components/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='lg:flex justify-between py-10 mx-auto'>
        <div className='w-7/12 font-Teko'>
          <p className='text-8xl p-20'>Mapping your<span className='text-teal-500'> way to success</span>, we go the <span className='text-orange-500'>extra mile.</span></p>
        </div>
        <div className='w-5/12 text-center'>
          <img src='./map.png ' className='max-h-[450px] ml-20 brightness-50 opacity-70 blur-sm absolute'/>
          <p className='blue-glassmorph rounded-md py-10 px-5 my-12 mb-16 w-64'>Get Detailed Routes!</p>
          <p className='green-glassmorph rounded-md py-10 mx-24 w-64'>Optimized for Countrysides.</p>
        </div>
      </div>
    </ContainerBlock>
  )
}
