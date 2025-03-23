'use client';

import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function getUsername(id: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

const Params = () => {
  const [state, setState] = useState(''); // get username

  const {
    data: username,
    params,
    run
  } = useRequest(getUsername, {
    defaultParams: ['1']
  });

  const onChange = () => {
    run(state);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Please enter userId"
          style={{ marginRight: 16, width: 240 }}
          value={state}
          onChange={e => setState(e.target.value)}
        />

        <Button
          type="button"
          onClick={onChange}
        >
          GetUserName
        </Button>
      </div>
      <p style={{ marginTop: 8 }}>UserId: {params[0]}</p>
      <p>Username: {username}</p>
    </div>
  );
};

export default Params;
