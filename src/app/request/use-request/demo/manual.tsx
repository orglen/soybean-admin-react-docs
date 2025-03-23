'use client';

/**
 * title: Edit username desc: In this example, we modify the username.
 *
 * title.zh-CN: 修改用户名 desc.zh-CN: 在这个例子中，我们尝试修改用户名。
 */

import { useRequest } from 'ahooks';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeUsername(username: string): Promise<{ success: boolean }> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

const ManualDemo = () => {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        toast.success(`The username was changed to "${params[0]}" !`, {
          position: 'top-center'
        });
      }
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

export default ManualDemo;
