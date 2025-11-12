"use client";
import { LayoutGrid } from 'lucide-react' 
import { Search } from 'lucide-react' 
import { ShoppingBag } from 'lucide-react' 
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '@/app/_utils/GlobalApi';

function Header() {
    
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getCategoryList();
    }, [])
    
    /**
     * Get Category list 
     */
    const getCategoryList = () => {
        setIsLoading(true);
        GlobalApi.getCategory().then(resp => {
            console.log('Full API Response:', resp);
            console.log('Response data:', resp.data);
            console.log('Categories array:', resp.data.data);
            
            // Log first category to see structure
            if (resp.data.data && resp.data.data.length > 0) {
                console.log('First category structure:', resp.data.data[0]);
            }
            
            setCategoryList(resp.data.data);
            setIsLoading(false);
        }).catch(error => {
            console.error('Error fetching categories:', error);
            setIsLoading(false);
        })
    }
    
  return (
    <div className='p-5 shadow-md flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image 
          src="/price_pantry_.png" 
          alt="logo" 
          width={150} 
          height={100} 
        />
          
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' />Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isLoading ? (
              <DropdownMenuItem disabled>Loading categories...</DropdownMenuItem>
            ) : categoryList.length === 0 ? (
              <DropdownMenuItem disabled>No categories found</DropdownMenuItem>
            ) : (
              categoryList.map((category, index) => (
                <DropdownMenuItem key={category.id || index}>
                 <div className='flex gap-2 items-center'>
                    {category.icon && category.icon[0]?.url && (
                      <Image 
                        src={'http://localhost:1337' + category.icon[0].url} 
                        alt={category.Name}
                        width={30}
                        height={30}
                        className='object-contain'
                      />
                    )}
                    <h2>{category.Name}</h2>
                  </div> 
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='md:flex gap-3 border rounded-full p-2 px-5 hidden'>
          <Search/>
          <input 
            type="text" 
            placeholder='Search'
            className='outline-none'
          />
        </div>
      </div>
      
      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 items-center text-lg'>
          <ShoppingBag/> 0
        </h2>
      </div>
    </div>
  )
}

export default Header