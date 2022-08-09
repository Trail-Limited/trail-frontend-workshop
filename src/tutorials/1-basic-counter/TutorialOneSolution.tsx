import { useState } from 'react';
import { TdsButton, TdsTypography } from '../../design-system';
import 'twin.macro';
import 'styled-components/macro';

export const BasicCounterSolution = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div tw='flex flex-col items-center'>
      <TdsTypography variant='h1'>{counter}</TdsTypography>

      <div tw='flex space-x-2'>
        <TdsButton variant='yellow' onPress={handleSubtract}>
          Subtract
        </TdsButton>
        <TdsButton variant='green' onPress={handleAdd}>
          Add
        </TdsButton>
        <TdsButton variant='red' onPress={handleReset}>
          Reset
        </TdsButton>
      </div>
    </div>
  );
};
