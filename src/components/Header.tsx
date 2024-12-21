import React from 'react';

export const Header = () => (
  <header className="h-[50vh] flex items-center justify-center bg-black text-white p-8">
    <div className="text-center">
      <h1 className="text-8xl md:text-[12rem] font-bold leading-none tracking-tighter mb-6">
        JOHN DOE
      </h1>
      <div className="text-2xl md:text-3xl tracking-[0.5em] uppercase">
        Software Developer
      </div>
    </div>
  </header>
);