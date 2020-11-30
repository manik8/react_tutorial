import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/512+dA1m+EL._SY344_BO1,204,203,200_.jpg',
  title: 'Hidden in Plain Sight',
  author: 'Jeffrey Archer'
}

const secondBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/41sjIXJgkWL._SX311_BO1,204,203,200_.jpg',
  title: 'ALIVE IN YOU: LOVE LIVES BY GIVING AND FORGIVING',
  author: 'PRIYA PAUL'
}


function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book 
        img={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props;
  return <article className="book">
    <img src={img} />
    <h1>{title}</h1>
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
  </article>
}

ReactDom.render(<BookList />, document.getElementById('root'));
