'use client';
import { Button } from '@ui/button';
import React, { useState } from 'react';

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-[18px]">
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Page;
