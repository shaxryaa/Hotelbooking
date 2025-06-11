import React from 'react'
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import SellingPoints from "@/components/SellingPoints";
import TestimonialCarousel from "@/components/TestimonialCarousel";


const Homepage = () => {
  return (
    <main>
      <SearchBar />
      <Hero />
      <FeaturedCarousel />
      <SellingPoints />
      <TestimonialCarousel />
    </main>
  )
}

export default Homepage