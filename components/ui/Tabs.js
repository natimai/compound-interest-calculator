import React, { useState } from 'react';

export const Tabs = ({ children, className }) => {
  return <div className={`tabs ${className || ''}`}>{children}</div>;
};

export const TabsList = ({ children, className }) => {
  return <div className={`tabs-list flex ${className || ''}`}>{children}</div>;
};

export const TabsTrigger = ({ children, isActive, onClick, className }) => {
  return (
    <button
      className={`tabs-trigger px-4 py-2 font-medium ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, isActive, className }) => {
  return (
    <div className={`tabs-content ${isActive ? 'block' : 'hidden'} ${className || ''}`}>
      {children}
    </div>
  );
};
