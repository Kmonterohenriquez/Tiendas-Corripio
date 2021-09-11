import axios from 'axios';
import React, { useState } from 'react';
import Message from '../helpers/Messages';

const TelevisionForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [brandLogo, setBrandLogo] = useState('');
  // const [category, setCategory] = useState('tv');
  const [color, setColor] = useState('');
  const [screenType, setScreenType] = useState('');
  const [productWidth, setProductWidth] = useState('');
  const [productDepth, setProductDepth] = useState('');
  const [resolution, setResolution] = useState('');
  const [madeOf, setMadeOf] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(['', '', '']);
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [hdmiInputs, setHdmiInputs] = useState(0);
  const [onSale, setOnSale] = useState(false);
  const [smart, setSmart] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [failureMsg, setFailureMsg] = useState(false);

  const textInputs = [
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
      value: currentPrice,
      label: 'Current price:',
      placeholder: 'Enter current price...',
      type: 'currentPrice',
    },
    {
      id: 4,
      value: oldPrice,
      label: 'Old price:',
      placeholder: 'Enter old price...',
      type: 'oldPrice',
    },
    {
      id: 5,
      value: brandLogo,
      label: "Brand's logo:",
      placeholder: 'Item brand logo',
      type: 'brandLogo',
    },
    {
      id: 6,
      value: quantity,
      label: 'Quantity:',
      placeholder: 'Enter item quantity',
      type: 'quantity',
    },
    {
      id: 7,
      value: productWidth,
      label: 'Product width: ',
      placeholder: 'Enter product width',
    },
    {
      id: 8,
      value: productDepth,
      label: 'Product depth:',
      placeholder: 'Enter product depth',
    },
    {
      id: 9,
      value: hdmiInputs,
      label: 'HDMI inputs:',
      placeholder: 'Enter HDMI inputs',
    },
  ];

  // const selectInputs = [
  //   {
  //     id: 1,
  //     value: color,
  //     label: 'Color: ',
  //     placeholder: 'Choose a color',
  //     options: ['Black', 'White'],
  //   },
  //   {
  //     id: 2,
  //     value: screenType,
  //     label: 'Screen type: ',
  //     placeholder: 'Choose a screen type',
  //     options: ['LED', 'QLED'],
  //   },
  //   {
  //     id: 3,
  //     value: resolution,
  //     placeholder: 'Choose a resolution',
  //     options: ['1280 × 720', '1920 × 1080', '3840 × 2160', '	7680 × 4320'],
  //   },
  //   {
  //     id: 4,
  //     value: madeOf,
  //     placeholder: 'Choose a material',
  //     options: ['Plastic', 'metal'],
  //   },
  // ];

  const radioInputs = [
    {
      id: 1,
      value: onSale,
      label: 'On sale:',
      name: 'onSale',
    },
    {
      id: 2,
      value: smart,
      label: 'Smart:',
      name: 'smart',
    },
    {
      id: 3,
      value: wifi,
      label: 'Wifi:',
      name: 'wifi',
    },
  ];

  const continueBtnHandler = () => {
    setSuccessMsg(false);
    setFailureMsg(false);
  };

  // Clear all inputs
  const clearInputs = () => {
    setName('');
    setModel('');
    setCurrentPrice(0);
    setOldPrice(0);
    setBrandLogo('');
    setQuantity(0);
    setImages([]);
    setDescription('');
    setColor('');
    setScreenType('');
    setProductWidth('');
    setProductDepth('');
    setResolution('');
    setMadeOf('');
    setImages(['', '', '']);
    setHdmiInputs(0);
    setOnSale(false);
    setSmart(false);
    setWifi(false);
  };

  const addItem = e => {
    e.preventDefault();
    axios
      .post('/items/', {
        name,
        model,
        currentPrice,
        oldPrice,
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

  const onChangeHandler = (value, type) => {
    switch (type) {
      case 'name':
        return setName(value);
      case 'model':
        return setModel(value);
      case 'price':
        return setCurrentPrice(value);
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

  const radioInputsHandler = () => {};
  return (
    <div>
      {successMsg && (
        <Message type='success' continueBtnHandler={continueBtnHandler} />
      )}
      {failureMsg && (
        <Message type='failure' continueBtnHandler={continueBtnHandler} />
      )}
      <h1 className='m-b-2'>Add New Television</h1>
      <form onSubmit={() => addItem()}>
        <div className='input-grid'>
          {textInputs.map(input => (
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
          {radioInputs.map(inputs => (
            <div className='radio-input'>
              <label>{inputs.label}</label>
              <input
                type='checkbox'
                name={inputs.name}
                onChange={() => radioInputsHandler(inputs.name)}
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

export default TelevisionForm;
