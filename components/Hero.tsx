"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';



const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" })
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-10 padding-x'>
        <h1 className='hero__title'>
          შეცვალეთ თქვენი სივრცე მარმარილოს მარადიული სილამაზით
        </h1>
        <p className='hero__subtitle'>
          გამოიკვლიეთ ჩვენი კოლექცია დღეს!
        </p>
        <CustomButton 
        title="კატალოგი"
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