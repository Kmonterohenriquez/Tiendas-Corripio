import React from 'react';
import '../styles/AddNewItem.sass';

const AddNewItem = () => {
  const inputs = [
    {
      id: 1,
      label: 'Name:',
      placeholder: 'Enter item name...',
    },
    {
      id: 2,
      label: 'Model:',
      placeholder: 'Enter item model...',
    },
    {
      id: 3,
      label: 'Price:',
      placeholder: 'Enter item price...',
    },
    {
      id: 4,
      label: "Brand's logo:",
      placeholder: 'Item brand logo',
    },
    {
      id: 5,
      label: 'Quantity:',
      placeholder: 'Enter item quantity',
    },
  ];

  return (
    <div id='AddNewItem' className='container'>
      <h2>Add New Item</h2>
      <h3>Item Information</h3>
      <form action=''>
        <div className='input-grid'>
          {inputs.map(input => (
            <div className='input-box' key={input.id}>
              <label>{input.label}</label>
              <input type='text' placeholder={input.placeholder} />
            </div>
          ))}
        </div>
        <div className='input-grid'>
          <div id='images-input'>
            <label>Images</label>
            <input type='text' placeholder='Enter image 1' />
            <input type='text' placeholder='Enter image 2' />
            <input type='text' placeholder='Enter image 3' />
          </div>
          <div id='description-input'>
            <label>Description</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='8'
              placeholder='Enter item Description'
            ></textarea>
          </div>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddNewItem;
