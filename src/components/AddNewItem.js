import React, { useState } from 'react';
import '../styles/AddNewItem.sass';
import Message from './helpers/Messages';
import axios from 'axios';

const AddNewItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [model, setModel] = useState('');
  const [brandLogo, setBrandLogo] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(['', '', '']);
  const [successMsg, setSuccessMsg] = useState(false);
  const [failureMsg, setFailureMsg] = useState(false);

  const inputs = [
    {
      id: 1,
      label: 'Name:',
      value: name,
      placeholder: 'Enter item name...',
      type: 'name',
    },
    {
      id: 2,
      value: model,
      label: 'Model:',
      placeholder: 'Enter item model...',
      type: 'model',
    },
    {
      id: 3,
      value: price,
      label: 'Price:',
      placeholder: 'Enter item price...',
      type: 'price',
    },
    {
      id: 4,
      value: brandLogo,
      label: "Brand's logo:",
      placeholder: 'Item brand logo',
      type: 'brandLogo',
    },
    {
      id: 5,
      value: quantity,
      label: 'Quantity:',
      placeholder: 'Enter item quantity',
      type: 'quantity',
    },
  ];

  const continueBtnHandler = () => {
    setSuccessMsg(false);
    setFailureMsg(false);
  };

  const onChangeHandler = (value, type) => {
    switch (type) {
      case 'name':
        return setName(value);
      case 'model':
        return setModel(value);
      case 'price':
        return setPrice(value);
      case 'brandLogo':
        return setBrandLogo(value);
      case 'quantity':
        return setQuantity(value);
      case 'description':
        return setDescription(value);
      default:
        return '';
    }
  };

  // Clear all inputs
  const clearInputs = () => {
    setName('');
    setModel('');
    setPrice(0);
    setBrandLogo('');
    setQuantity(0);
    setImages([]);
    setDescription('');
  };

  const addItem = e => {
    e.preventDefault();
    axios
      .post('/items/', {
        name,
        model,
        price,
        brandLogo,
        quantity,
        images,
        description,
      })
      .then(res => {
        clearInputs();
        console.log('Item added!');
        setSuccessMsg(true);
      })
      .catch(err => {
        console.log(err);
        setFailureMsg(true);
      });
  };

  return (
    <div id='AddNewItem' className='container'>
      {successMsg && (
        <Message type='success' continueBtnHandler={continueBtnHandler} />
      )}
      {failureMsg && (
        <Message type='failure' continueBtnHandler={continueBtnHandler} />
      )}
      <h2>Add New Item</h2>
      <h3>Item Information</h3>
      <form onSubmit={e => addItem(e)}>
        <div className='input-grid'>
          {inputs.map(input => (
            <div className='input-box' key={input.id}>
              <label>{input.label}</label>
              <input
                type='text'
                value={input.value}
                placeholder={input.placeholder}
                onChange={e => onChangeHandler(e.target.value, input.type)}
              />
            </div>
          ))}
        </div>
        <div className='input-grid'>
          <div id='images-input'>
            <label>Images</label>
            <input
              type='text'
              placeholder='Enter image 1'
              onChange={e =>
                setImages(oldImages => [...oldImages, e.target.value])
              }
            />
            <input
              type='text'
              placeholder='Enter image 2'
              onChange={e =>
                setImages(oldImages => [...oldImages, e.target.value])
              }
            />
            <input
              type='text'
              placeholder='Enter image 3'
              onChange={e =>
                setImages(oldImages => [...oldImages, e.target.value])
              }
            />
          </div>
          <div id='description-input'>
            <label>Description</label>
            <textarea
              name='description'
              id=''
              cols='30'
              rows='8'
              placeholder='Enter item Description'
              value={description}
              onChange={e => onChangeHandler(e.target.value, e.target.name)}
            ></textarea>
          </div>
        </div>
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
};

export default AddNewItem;
