import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookItem = ({ book }) => {
    const [bookImage, setBookImage] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const image = await axios.get(`/wp-json/wp/v2/media/${book.featured_media}`);
                await setBookImage(image.data.media_details.sizes.medium.source_url);
                const author = await axios.get(`/wp-json/wp/v2/users/${book.author}`);
                await setBookAuthor(author.data.name);
                await setIsLoaded(true);
            } catch (error) {
                console.log('error fetching image and author', error);
            }; 
        };

        fetchApi();
    }, [setBookImage, setBookAuthor]);

    if(isLoaded){
        return (
            <div className="book-item">
                <h2 className="title">{ book.title.rendered }</h2>
                <img className="book-img" src={bookImage} alt={book.title.rendered} />
                <small>Reviewed by <strong>{bookAuthor}</strong></small>
                <div 
                    dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }}
                    />
                < Link to={`/book/${book.id}`}> Read Review</Link>
                <hr/>
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
};

export default BookItem;
