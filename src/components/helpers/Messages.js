import React from 'react';
import '../../styles/Message.sass';

const Messages = ({ type, continueBtnHandler }) => {
  let icon;
  if (type === 'success') {
    icon = (
      <div className='icon'>
        <i className='fas fa-check-circle'></i>
        <p>Item added successfully!</p>
      </div>
    );
  } else if (type === 'failure') {
    icon = (
      <div className='icon'>
        <i className='fas fa-times-circle'></i>
        <p>Error ocurred when adding Item!</p>
      </div>
    );
  }

  return (
    <div id='Message'>
      <div className='overlay'></div>
      <div id='Message-container'>
        {icon}
        <button onClick={continueBtnHandler}>Continue</button>
      </div>
    </div>
  );
};

export default Messages;
