import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Harry Potter', author: 'J.K. Rolling', id: 1},
        {title: 'Snow Crash', author: 'Neil Stevenson', id: 2}
    ])
    const addBooks = (title, author) => {
        setBooks([...books, {title, author, id: uuid() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBooks, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider