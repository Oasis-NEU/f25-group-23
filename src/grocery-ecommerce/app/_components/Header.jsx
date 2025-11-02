import { LayoutGrid } from 'lucide-react' 
import { Search } from 'lucide-react' 
import { ShoppingBag } from 'lucide-react' 
import Image from 'next/image'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <div className="p-5 shadow-md flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-8">
        <Image
          src="/price_pantry_.png"
          alt="logo"
          width={100}
          height={100}
        />

        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex gap-2 items-center border 
              rounded-full p-2 px-6 bg-slate-200 hover:bg-slate-300 transition cursor pointer"
            >
              <LayoutGrid className="h-5 w-5" />
              <span>Category</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 border rounded-full p-2 px-5">
          <Search className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Right Section (Shopping Bag) */}
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag className="h-5 w-5" /> 0
        </h2>
      </div>
    </div>
  );
}


export default Header