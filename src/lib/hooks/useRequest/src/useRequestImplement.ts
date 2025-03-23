import { useCreation, useLatest, useMemoizedFn, useMount, useUnmount, useUpdate } from 'ahooks';

import Fetch from './Fetch';
import type { Options, Plugin, Result, Service } from './types';
import isDev from './utils/isDev';

function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = []
) {
  const { manual = false, ready = true, ...rest } = options;

  if (isDev) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn(`expected defaultParams is array, got ${typeof options.defaultParams}`);
    }
  }

  const fetchOptions = {
    manual,
    ready,
    ...rest
  };

  const serviceRef = useLatest(service);

  const update = useUpdate();

  const fetchInstance = useCreation(() => {
    const initState = plugins.map(p => p?.onInit?.(fetchOptions)).filter(Boolean);

    return new Fetch<TData, TParams>(serviceRef, fetchOptions, update, Object.assign({}, ...initState));
  }, []);
  fetchInstance.options = fetchOptions;
  // run all plugins hooks
  fetchInstance.pluginImpls = plugins.map(p => p(fetchInstance, fetchOptions));

  useUnmount(() => {
    fetchInstance.cancel();
  });

  return {
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    loading: fetchInstance.state.loading,
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
    params: fetchInstance.state.params || [],
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance))
  } as Result<TData, TParams>;
}

export default useRequestImplement;
