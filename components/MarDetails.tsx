"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MarProps } from '@/types';


interface MarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    mar: MarProps;

}

const MarDetails = ({ isOpen, closeModal, mar }: 
    MarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-hidden transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button 
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-200 rounded-full'
                                    type='button'
                                    onClick={closeModal}
                                    >
                                        <Image 
                                            src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        /> 

                                    </button>
                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className='relative w-full h-40 rounded-lg'>
                                            <Image src={mar.marmarilosfoto} fill priority
                                                alt="satesto marmarilo" 
                                                className='object-contain' />
                                        </div>
                                        {/* skami */}
                                        <div className='flex gap-3 justify-between'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-200 rounded-lg'>
                                                <Image src={mar.skamisfoto} fill priority
                                                    alt="satesto marmarilo" 
                                                    className='object-contain' />
                                            </div>
                                            
                                            
                                            <div className='flex-1 relative w-full top-4 h-24 bg-primary-blue-200 rounded-lg'> 
                                                <div>
                                                    <h3 className='font-bold text-center'>
                                                    {mar.feri} {mar.saxeoba}ს  {mar.skami}
                                                    </h3>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <h3 className='font-bold text-center'>
                                                        {mar.skamisfasi}₾
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* magida */}
                                        <div className='flex gap-3 justify-between'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-200 rounded-lg'>
                                                <Image src={mar.magidissfoto} fill priority
                                                    alt="satesto marmarilo" 
                                                    className='object-contain' />
                                            </div>
                                            
                                            
                                            <div className='flex-1 relative w-full top-4 h-24 bg-primary-blue-200 rounded-lg'> 
                                                <div>
                                                    <h3 className='font-bold text-center'>
                                                    {mar.feri} {mar.saxeoba}ს  {mar.magida}
                                                    </h3>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <h3 className='font-bold text-center'>
                                                        {mar.magidisfasi}₾
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* jerko */}
                                        <div className='flex gap-3 justify-between'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-200 rounded-lg'>
                                                <Image src={mar.jerkosfoto} fill priority
                                                    alt="satesto marmarilo" 
                                                    className='object-contain' />
                                            </div>
                                            
                                            
                                            <div className='flex-1 relative w-full top-4 h-24 bg-primary-blue-200 rounded-lg'> 
                                                <div>
                                                    <h3 className='font-bold text-center'>
                                                    {mar.feri} {mar.saxeoba}ს  {mar.jerko}
                                                    </h3>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <h3 className='font-bold text-center'>
                                                        {mar.jerkosfasi}₾
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* shemsdgomi shemoqmedebebi marmariloti */}
                                    </div>
                                </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
  
    </>
  )
}

export default MarDetails