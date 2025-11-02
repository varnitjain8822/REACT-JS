import React, { useContext } from 'react';
import { todotaskcontext } from '../store/todostore';

export default function Welcome() {

  const todotaskfromcontext= useContext(todotaskcontext);
  const items = todotaskfromcontext.items;
  return (
    <>
      {items.length === 0 && <h1>WELCOME TO YOUR TO-DO LIST</h1>}
    </>
  );
}
