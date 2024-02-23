"use client";

import {useState} from 'react';
import Image from 'next/image';

import { MarProps } from '@/types';
import CustomButton from './CustomButton';
import MarDetails from './MarDetails';

interface MarCardProps {
    mar: MarProps;
}
{/* types marProps shecvla !!!!!!!!!! */}
const MarCard = ( { mar }: MarCardProps ) => {
    const { marmarilosfoto, saxeoba, feri, skami, skamisfasi, magida, magidisfasi, jerko, jerkosfasi, skamisfoto, magidissfoto, jerkosfoto} = mar;

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mar-card group '>
        <div className='mar-card__content '>
            <h2 className='mar-card__content-title'>
                {feri} {saxeoba}
            </h2>
        </div>
        

        <div className='relative w-full h-40 my-3 object-contain'> 
            <Image src={marmarilosfoto} fill
            alt="satesto maramladi" 
            className='object-contain' />
        </div>
        <div className='relative flex w-full py-3'>
            <div className='mar-card__btn-container'>
                <CustomButton 
                title="გაიგე მეტი"
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles='text-white text-[14px] leading-[17px] font-bold'
                handleClick={() => {setIsOpen(true)}}
                />
            </div>
            
        </div>
        <MarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} mar={mar} />
        
    </div>
  )
}

export default MarCard