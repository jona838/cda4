"use client";

import React, { useState } from 'react';

import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }:  {otherClasses : string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <div className='flex bg-primary-blue rounded-full text-white'>
      <div className='mt-2 mr-3 ml-3'>
        <span>ძებნა</span>
      </div>
      <div>
        <Image
          src={"/magnifying-glass.svg"}
          alt={"magnifying glass"}
          width={40}
          height={40}
          className='object-contain'
        />
      </div>
    </div>
    
</button>

)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '') {
      return alert("sheavse sadziebo veli")
    };

    updateSearchParams(manufacturer)

  }


  const updateSearchParams = (manufacturer: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer === 'ყველა') {
      window.location.href = window.location.pathname; 
    }
    else if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, {scroll: false});
  };
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar