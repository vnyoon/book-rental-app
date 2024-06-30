import React, { memo } from 'react'
import BookCard from './BookCard'

import { bookList } from "../../common/local-data";

const BookList = memo(() => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
      {
        bookList.map((book) => {
          return <BookCard key={book.id} book={book} />
        })
      }
    </div>
  )
})

export default BookList