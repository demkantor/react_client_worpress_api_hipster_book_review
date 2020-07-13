import React, { Component } from 'react';
import axios from 'axios';

import BookItem from './BookItem';

class Books extends Component {

    state = {
        books: [],
        isLoaded: false
    };

    componentDidMount = () => {
        this.fetchBooks();
    };

    fetchBooks = async () => {
        try {
            const getBooks = await axios.get('/wp-json/wp/v2/books');
            console.log(getBooks.data);
            await this.setState({
                books: getBooks.data,
                isLoaded: true
            });
        } catch (error) {
            console.log('error fetching books', error);
        };
    };

    render() {

        const { books, isLoaded } = this.state;
        if(isLoaded) {

            return (
                <div>
                    { books.map(book => (
                        <BookItem
                            key={book.id}
                            book={book} />
                    ))}
                </div>
            );


        } else {
            return <h3>Loading....</h3>
        };
    };
};

export default Books;
