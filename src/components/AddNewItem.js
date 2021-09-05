import React, { useState } from 'react';
import '../styles/AddNewItem.sass';
import TelevisionForm from './Forms/TelevisionForm';

const AddNewItem = () => {
  const [category, setCategory] = useState('');

  return (
    <div id='AddNewItem' className='container'>
      <h2>Add New Item</h2>
      <h3 className='m-b-2'>Item Information</h3>
      <form>
        <label className="p-b-2"> Category</label>
        <select className="m-b-7" value={category} onChange={e => setCategory(e.target.value)}>
          <option>Elige una categoria</option>
          <option value='tv'>Television</option>
          <option value='audio'>Audio</option>
        </select>

        {category === 'tv' ? <TelevisionForm /> : null}
      </form>
    </div>
  );
};

export default AddNewItem;
