"use client";

{/* Listbox */}

import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Listbox ,Combobox, Transition } from '@headlessui/react';

import { SearchManufacturerProps } from '@/types';

import { manufacturers } from '@/constants';
import { useRouter } from 'next/navigation';


//https://copyprogramming.com/howto/select-value-doesnt-change-the-first-time-i-trigger-onchange-event-when-using-setsate-react
//Select value doesnt change the first time I trigger onChange event

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  // const filteredManufacturers = 
  //   query === "" 
  //     ? manufacturers 
  //     : manufacturers.filter((item) => (
  //       item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  //     ))
  
  const router = useRouter();

  const updateSearchParams = (manufacturer: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("manufacturer", manufacturer);
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    // router.push(newPathname, {scroll: false});
    return newPathname
  };

  const handleUpdateParams = (e: {value: string}) => {
    const newPathname = updateSearchParams(e.value);

    router.push(newPathname)
  }


  const [selected, setSelected] = useState(manufacturers[0])

  const updateSelect = ( tg: string ) => {
      setSelected(tg);
      if(setManufacturer) setManufacturer(tg);
  }
  
  return (

    /*<div className='search-manufacturer'>
      <Listbox 
      value={selected}
      onChange={(e) => {
        updateSelect(e)
        //handleUpdateParams(e);
        console.log(selected)
        console.log(manufacturer)
      }}
      >
        <div className='relative w-full z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected}</span>
            <Image 
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='up down arrow'
            />
          </Listbox.Button>
          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {manufacturers.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
                  */
    
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer} >
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px] w-full">
            <Image src="chevron-up-down.svg" width={18} height={18} className='ml-4' alt="down-arrow"  />
          </Combobox.Button>
          <Combobox.Input 
          className="search-manufacturer__input select-none"
          placeholder='მარმარილო'
          displayValue={(manufacturer: string) => manufacturer}
          onChange={(e) => {setQuery(e.target.value)}}
          />
          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {manufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({active}) => `
                    relative search-manufacturer__option
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900' }
                    `}
                    value={item}
                  >
                    {({selected, active}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
              )}
                  </Combobox.Option>
                )
                
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
                          
  )
}

export default SearchManufacturer