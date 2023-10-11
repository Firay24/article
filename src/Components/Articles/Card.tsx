"use client"
import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

interface CardProps {
  article: any;
  index: number;
}

const Card: React.FC<CardProps> = ({ article, index }) => {
  const colorCombos = [
    'bg-blue-50',
    'bg-red-50',
    'bg-purple-100',
  ];

  const colorIndex = index % colorCombos.length;
  const selectedColor = colorCombos[colorIndex];

  return (
    <div className='bg-white border-[1.5px] p-2 w-80 h-80 rounded-lg flex flex-col justify-between'>
      <div className={`rounded-lg p-3 h-full ${selectedColor}`}>
        <div className='mb-3 text-sm text-gray-400 flex justify-between'>
          <p>
            {article && article.pub_date && article.pub_date}
          </p>
          <AiFillCalendar />
        </div>
        <div className='mb-3'>
          <div className='flex gap-x-2 items-center'>
            <BsFillPersonFill className='text-gray-400 text-sm' />
            <p className='text-sm text-gray-500 font-medium line-clamp-1'>
              {article && article.byline && article.byline.original}
            </p>
          </div>
          <h3 className='font-semibold text-lg text-gray-800 line-clamp-2'>
            {article && article.headline && article.headline.main}
          </h3>
        </div>
        <div>
          <p className='text-sm text-gray-600 line-clamp-3'>
            {article && article.abstract && article.abstract}
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center p-3'>
        <p className='text-gray-600'>More details</p>
        <button className='py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white rounded-lg'>
          <a href={article.web_url} target="_blank" rel="noopener noreferrer">Details</a>
        </button>
      </div>
    </div>
  )
}

export default Card