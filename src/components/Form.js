import React, { useState } from 'react'

const Form = () => {
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");

  const [title, setTitle] = useState('');
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const [price, setPrice] = useState('');
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const uploadImage = (db) => {
    db.collection("products").add({
      name: title,
      price: price,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  
  }
  return (
    <div>
      <div>
        <input type="file" accept="image/*" name="image" />
        <input type="text" name="name" onChange={handleTitle}/>
        <input type="text" name="price" onChange={handlePrice}/>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url}/>
      </div>
    </div>
  )
}

export default Form;
