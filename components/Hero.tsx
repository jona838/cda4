"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';



const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-10 padding-x'>
        <h1 className='hero__title'>
          იპოვე და შეიგრძენი მარამრილო ჯიმა
        </h1>
        <p className='hero__subtitle'>
          იპოვე ყვეLაზე მაგარი და ძლიერი მარმარილო
        </p>
        <CustomButton 
        title="აღმოაჩინე მარმაrilo"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={() => {handleScroll}}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="hero" fill className='object-contain' />
        </div>
          <div className='hero__image-overlay' />
        
      </div>
    </div>
  )
}

export default Hero