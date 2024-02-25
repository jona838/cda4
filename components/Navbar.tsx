import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

const Navbar = () => {
  return (
    <header className='w-full z-10'>
      <div className='py-2 px-5 bg-primary-blue-100'>
        <div>
          {footerLinks.map((link) => (
            <div key={link.title} className='text-center'>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500 px-3 sm:px-11 py-4 flex-1 hover:text-black"> 
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src="./logo.svg" alt="logo" width={15} height={15} className='object-contain' />
                <span>armarilo.ge</span>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar