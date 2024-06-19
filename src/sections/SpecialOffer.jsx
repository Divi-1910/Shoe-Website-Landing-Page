import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'


const SpecialOffer = () => {
  return (
    <section className='flex justify-content items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div>
      <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
					<span className="text-coral-red"> Special </span>
					Offer
					<br />
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings , we offer unparalleled value that sets us apart. 
				</p>
				<p className="mt-4 lg:max-w-lg info-text">
					Navigate a realm of possiblities Designed to fulfill your unique desires , surpassing the lofiest expectations. Your journey with us is nothing short of expectional.  
				</p>

				<div className="mt-11 flex gap-4">
					<Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
				</div>
			</div>
    </section>
  )
}

export default SpecialOffer
