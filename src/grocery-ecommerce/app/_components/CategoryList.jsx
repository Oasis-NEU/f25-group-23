import React from 'react'
import Image from 'next/image'

function CategoryList({ categoryList }) {  // ← Add curly braces for destructuring
  // Safety check
  if (!categoryList || categoryList.length === 0) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className='mt-5'>
        <h2 className='text-primary font-bold text-2xl'>Shop By Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
            {categoryList.map((category, index) => (  // ← Use ( ) or add return
                <div key={category.id || index} className='flex flex-col 
                items-center bg-green-50 gap-5 p-3 rounded-lg cursor-pointer hover:bg-green-200'>
                    {category.icon && category.icon[0]?.url && (
                        <Image 
                            src={'http://localhost:1337' + category.icon[0].url}
                            width={50}
                            height={50}
                            alt={category.Name || 'icon'}
                            className='hover:scale-125 transition-all ease-in-out'
                        />
                    )}
                    <h2 className='text-sm'>{category.Name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList