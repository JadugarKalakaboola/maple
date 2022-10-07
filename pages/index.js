import Head from 'next/head'
import Image from 'next/image'
import ContainerBlock from '../components/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='lg:flex justify-between py-10 mx-auto'>
        <div className='lg:w-7/12 font-Teko'>
          <p className='lg:text-8xl pl-5 text-5xl lg:p-20'>Mapping your<span className='text-teal-500'> way to success</span>, we go the <span className='text-orange-500'>extra mile.</span></p>
        </div>
        <div className='lg:w-5/12 text-center'>
          <img src='./map.png ' className='lg:max-h-[450px] lg:ml-20 brightness-50 opacity-70 blur-sm absolute'/>
          <p className='blue-glassmorph rounded-md py-10 mx-3 px-5  mt-5 lg:my-24 mb-16 w-64'>Get Detailed Routes.</p>
          <p className='green-glassmorph rounded-md mx-3 py-10 lg:mx-24 w-64'>The best Directions!</p>
        </div>
      </div>
    </ContainerBlock>
  )
}
