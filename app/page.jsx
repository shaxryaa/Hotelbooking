import React from 'react'
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import SellingPoints from "@/components/SellingPoints";
import TestimonialCarousel from "@/components/TestimonialCarousel";


const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturedCarousel />
      <SellingPoints />
      <TestimonialCarousel />
    </main>
  )
}

export default Homepage