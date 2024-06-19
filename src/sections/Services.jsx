import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((services) => (<ServiceCard key={services.label} {...services} />))}
    </section>
  )
}

export default Services
