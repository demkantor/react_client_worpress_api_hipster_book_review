import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookPage = ({ match }) => {
    const [book, setBook] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const id = match.params.id
            try {
                const myBook = await axios.get(`/wp-json/wp/v2/books/${id}`);
                await setBook(myBook.data);
                await setIsLoaded(true);
            } catch (error) {
                console.log('error fetching image and author', error);
            }; 
        };

        fetchApi();
    }, [setBook]);

    if(isLoaded) {
        return (
            <>
                <Link to='/'>Go Back</Link>
                <hr />
                <h1>{book.title.rendered}</h1>
                <div 
                    dangerouslySetInnerHTML={{ __html: book.content.rendered }}
                    />
                <h4>Publisher: {book.acf.publisher}</h4>
            </>
        );
    } else {
        return (
            <h2>Loading...</h2>
        );
    }
    
};

export default BookPage;
