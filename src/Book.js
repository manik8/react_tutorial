import React from 'react'

const Book = (props) => {
    const {image, title, author} = props;

  const clickHandler = () => {
    alert("Hello World")
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return <article className="book" onMouseOver={() => {
    console.log("Manik");
  }}>
    <img src={image} alt="book logo" />
    <h1>{title}</h1>
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
    <button type="button" onClick={clickHandler}>reference example</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>
}

export default Book;
