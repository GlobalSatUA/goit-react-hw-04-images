import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles.css';

const Loader = () => {
  return (
    <div className="Loader">
      <ThreeDots color="blue" height={80} width={80} />
    </div>
  );
};

export default Loader;


