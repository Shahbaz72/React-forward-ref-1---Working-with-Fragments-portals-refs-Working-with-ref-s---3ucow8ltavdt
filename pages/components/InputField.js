'use client';
import React from 'react';

const InputField = React.forwardRef((props, ref) => {
  console.log(ref)
  return (
    <div>
      <input id='input' type='text' ref={ref} />
    </div>
  );
});

export default InputField;
