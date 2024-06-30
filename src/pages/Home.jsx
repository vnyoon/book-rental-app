import React, { memo } from 'react'

import BookList from '../components/books/BookList'

const Home = memo(() => {
  return (
    <BookList />
  )
})

export default Home