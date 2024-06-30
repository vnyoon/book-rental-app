import React, { memo } from 'react'

import { FaHeart } from 'react-icons/fa';
import Rating from './Rating';

const BookCard = memo(({ book }) => {
  return (
    <figure className="p-4 border border-black/10 rounded-xl shadow-sm">
      <div className="relative">
        <button className="absolute top-2 right-2 bg-primary p-1">
          <FaHeart />
        </button>

        <img className="h-96" src={book.cover} alt={book.title} />
      </div>

      <figcaption className="pt-4">
        <h3 className="text-xl">{book.title}</h3>

        <p className="text-[#575A6E] text-sm mt-1 mb-2">{book.genre}</p>

        <div className="flex items-center space-x-1 mb-5">
          <Rating value={book.rating} />
        </div>

        <button className="py-2 px-5 bg-primary rounded-lg text-[#171923] font-semibold text-sm">
          ￥{book.price} | 加入购物车
        </button>
      </figcaption>
    </figure>
  )
})

export default BookCard