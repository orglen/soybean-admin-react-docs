'use client';

import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useRef, useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
/**
 * title: Edit username
 *
 * title.zh-CN: 修改用户名
 */

function getUsername(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

function editUsername(username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to modify username'));
      }
    }, 1000);
  });
}

const Mutate = () => {
  // store last username
  const lastRef = useRef<string>(null);

  const [state, setState] = useState('');

  // get username
  const { data: username, mutate } = useRequest(getUsername);

  // edit username
  const { run: edit } = useRequest(editUsername, {
    manual: true,
    onError: error => {
      toast.error(error.message, {
        position: 'top-center'
      });
      if (lastRef.current) {
        mutate(lastRef.current);
      }
    },
    onSuccess: (_, params) => {
      setState('');
      toast.success(`The username was changed to "${params[0]}" !`, {
        position: 'top-center'
      });
    }
  });

  const onChange = () => {
    lastRef.current = state;
    mutate(state);
    edit(state);
  };

  return (
    <div className="flex items-center gap-2">
      <p>Username: {username}</p>
      <Input
        placeholder="Please enter username"
        style={{ marginRight: 16, width: 240 }}
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <Button
        type="button"
        onClick={onChange}
      >
        Edit
      </Button>
    </div>
  );
};

export default Mutate;
