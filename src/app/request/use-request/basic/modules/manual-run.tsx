'use client';

import { useRequest } from 'ahooks';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
/**
 * title: Edit username desc: In this example, we use `run(username)` to edit the username, and use `onSuccess` and
 * `onError` to handle success and failure.
 *
 * title.zh-CN: 修改用户名 desc.zh-CN: 在这个例子中，我们通过 `run(username)` 来修改用户名，通过 `onSuccess` 和 `onError` 来处理成功和失败。
 */
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

const ManualRun = () => {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onError: error => {
      toast.error(error.message, {
        position: 'top-center'
      });
    },
    onSuccess: (_, params) => {
      setState('');
      toast.success(`The username was changed to "${params[0]}" !`, {
        position: 'top-center'
      });
    }
  });

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Please enter username"
        style={{ marginRight: 16, width: 240 }}
        value={state}
        onChange={e => setState(e.target.value)}
      />

      <Button
        disabled={loading}
        onClick={() => run(state)}
      >
        {loading ? 'Loading' : 'Edit'}
      </Button>
    </div>
  );
};

export default ManualRun;
