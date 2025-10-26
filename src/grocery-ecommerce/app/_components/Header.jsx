import { LayoutGrid } from 'lucide-react' 
import { Search } from 'lucide-react' 
import { ShoppingBag } from 'lucide-react' 
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-md flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image src ='/price_pantry_.com.png' alt='logo'
        width={150}
        height={100}
        />
        
        <h2 className='flex gap-2 items-center
            border rounded-full p-2 px-10 bg-slate-200
        '>
          <LayoutGrid className='h-5 w-5' />Category</h2>
        <div className=' md:flex gap-3 border rounded-full p-2 px-5
        hidden'>
          <Search/>
          <input type="text" 
          placeholder='Search'
          className='outline-none'
          />
        </div>
    </div>
    <div className='flex gap-5 items-center'>
      <h2 className='flex gap-2 items-center text-lg'> <ShoppingBag/> 0</h2>
  </div>
  </div>
  )
}

export default Header