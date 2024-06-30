import React from 'react';

export const useLongPress = () => {
  return {
    onKeyDown: (e: React.KeyboardEvent) => {},
    onKeyUp: (e: React.KeyboardEvent) => {},
    onMouseDown: (e: React.MouseEvent) => {},
    onMouseUp: (e: React.MouseEvent) => {},
  };
};
