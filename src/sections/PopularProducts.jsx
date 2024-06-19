import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../Components/PopularProductCard'

const PopularProducts = () => {
  return (
    <div>
      <section id="products" className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'> <span className='text-coral-red'> Best  </span>Sellers </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience Top-notch quality and style with our BestSellers offering Premium Comfort , Design and Value</p>
        </div>

        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name}{...product} />
        ))}


        </div>


      </section>
    </div>
  )
}

export default PopularProducts
