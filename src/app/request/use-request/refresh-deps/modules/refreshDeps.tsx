'use client';
import Mock from 'mockjs';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import useRequest from '@/lib/hooks/useRequest';
/**
 * title: Repeat last request desc: When the dependency array changes, use the previous parameters to make the request
 * again.
 *
 * title.zh-CN: 重复上一次请求 desc.zh-CN: 依赖数组变化时，使用上一次的参数重新发起请求。
 */
function getUsername(id: number): Promise<string> {
  console.log('getUsername id:', id);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

const RefreshDeps = () => {
  const [userId, setUserId] = useState<number>(0);

  const { data, loading } = useRequest(getUsername, {
    onBefore: () => {
      toast(`改变了参数${userId}`, {
        position: 'top-center'
      });
    },
    params: userId
  });

  return (
    <div className="flex flex-col gap-2">
      <p>Username: {loading ? 'loading...' : data}</p>
      <Button onClick={() => setUserId(Math.random())}>只改变参数</Button>
    </div>
  );
};

export default RefreshDeps;
