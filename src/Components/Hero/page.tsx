import React from 'react';
import Container from "../Shared/Container"
import Search from './search';

interface HeroSectionProps {
  onSearch: (searchTerm: string) => void
}

const Hero: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section className='bg-gray-100'>
      <Container className="py-14 sm:py-20 md:py-20 relative z-10">
        <div className='text-center'>
          <h1 className='text-3xl font-semibold mb-3 text-gray-800'>
            Explore the World of News: Your Gateway to Informed Decisions!
          </h1>
          <p className='text-gray-600'>
            Search Your Desired News by Simply Typing Any Keywords - Our Hassle-Free News Discovery Service!
          </p>
        </div>
        <div>
          <Search onSearch={onSearch} />
        </div>
      </Container>
    </section>
  )
}

export default Hero