"use client";
import React from 'react'
import Image from 'next/image'
import Custombutton from './Custombutton'

const Hero = () => {
    const handlescroll = () => {

    }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Find, book, or rent a car - quickly and easily !
        </h1>
        <p className='hero_subtitle'>
            Steamline your car rental experiance with our effortless booking process. 
        </p>
            <Custombutton
            title='Explore Cars'
            containerstyle="bg-primary-blue text-white rounded-full mt-10"
            handleclick={handlescroll}
            />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero' 
          fill className='object-contain'/>
          
        </div>

      </div>
    </div>
  )
}

export default Hero
