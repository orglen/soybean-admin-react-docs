'use client';

import { useRequest } from 'ahooks';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const LifeCycle = () => {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onBefore: params => {
      toast.info(`Start Request: ${params[0]}`, {
        position: 'top-center'
      });
    },
    onError: error => {
      toast.error(error.message, {
        position: 'top-center'
      });
    },
    onFinally: () => {
      toast.info(`Request finish`, {
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

export default LifeCycle;
