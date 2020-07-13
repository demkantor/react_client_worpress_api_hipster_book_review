import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookItem = ({ book }) => {
    const [bookImage, setBookImage] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            setBookImage(await axios.get('/wp-json/wp/v2/books'));
        }

        fetchApi();
    }, [setBookImage]);


    return (
        <>
            <h2>{ book.title.rendered }</h2>
            <div 
                dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }}>
            </div>
        </>
    );
};

export default BookItem;
