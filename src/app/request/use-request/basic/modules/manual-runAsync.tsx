'use client';

import { useRequest } from 'ahooks';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
/**
 * title: Edit username desc: In this example, we use `runAsync(username)` to edit the user name. At this time, we must
 * catch the exception through catch.
 *
 * title.zh-CN: 修改用户名 desc.zh-CN: 在这个例子中，我们通过 `runAsync(username)` 来修改用户名，此时必须通过 catch 来自行处理异常。
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

const ManualRunAsync = () => {
  const [state, setState] = useState('');

  const { loading, runAsync } = useRequest(editUsername, {
    manual: true
  });

  const onClick = async () => {
    try {
      await runAsync(state);
      setState('');
      toast.success(`The username was changed to "${state}" !`, {
        position: 'top-center'
      });
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center'
      });
    }
  };

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
        type="button"
        onClick={onClick}
      >
        {loading ? 'Loading' : 'Edit'}
      </Button>
    </div>
  );
};

export default ManualRunAsync;
