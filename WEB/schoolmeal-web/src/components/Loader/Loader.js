import React from 'react';
import LOADER from '../../images/loader.gif';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='Loader'>
      <img src={LOADER} alt='loading' className='Loader--loaderImg'/>
    </div>
  );
};

export default Loader;