import React from 'react';

export const Alert = ({ children, className }) => {
  return (
    <div className={`p-4 border rounded-md bg-blue-50 text-blue-900 ${className || ''}`}>
      {children}
    </div>
  );
};

export const AlertDescription = ({ children, className }) => {
  return (
    <div className={`mt-2 text-sm ${className || ''}`}>
      {children}
    </div>
  );
};
