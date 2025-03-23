import type { DependencyList } from 'react';

import type Fetch from './Fetch';
import type { CachedData } from './utils/cache';

export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;
export type Subscribe = () => void;

// for Fetch

export interface FetchState<TData, TParams extends any[]> {
  data?: TData;
  error?: Error;
  loading: boolean;
  params?: TParams;
}

export interface PluginReturn<TData, TParams extends any[]> {
  onBefore?: (params: TParams) =>
    | ({
        returnNow?: boolean;
        stopNow?: boolean;
      } & Partial<FetchState<TData, TParams>>)
    | void;

  onCancel?: () => void;

  onError?: (e: Error, params: TParams) => void;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
  onMutate?: (data: TData) => void;
  onRequest?: (
    service: Service<TData, TParams>,
    params: TParams
  ) => {
    servicePromise?: Promise<TData>;
  };
  onSuccess?: (data: TData, params: TParams) => void;
}

// for useRequestImplement

export interface Options<TData, TParams extends any[]> {
  // cache
  cacheKey?: string;

  cacheTime?: number;
  debounceLeading?: boolean;
  debounceMaxWait?: number;
  debounceTrailing?: boolean;
  // debounce
  debounceWait?: number;

  defaultParams?: TParams;

  focusTimespan?: number;
  getCache?: (params: TParams) => CachedData<TData, TParams> | undefined;

  // loading delay
  loadingDelay?: number;

  manual?: boolean;
  onBefore?: (params: TParams) => void;
  onError?: (e: Error, params: TParams) => void;

  // formatResult?: (res: any) => TData;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
  onSuccess?: (data: TData, params: TParams) => void;

  params?: TParams[0];
  pollingErrorRetryCount?: number;
  // polling
  pollingInterval?: number;
  pollingWhenHidden?: boolean;

  // ready
  ready?: boolean;
  // refreshDeps
  refreshDeps?: DependencyList;
  refreshDepsAction?: () => void;

  // refresh on window focus
  refreshOnWindowFocus?: boolean;
  // retry
  retryCount?: number;
  retryInterval?: number;
  setCache?: (data: CachedData<TData, TParams>) => void;
  staleTime?: number;

  throttleLeading?: boolean;
  throttleTrailing?: boolean;

  // throttle
  throttleWait?: number;

  // [key: string]: any;
}

export type Plugin<TData, TParams extends any[]> = {
  (fetchInstance: Fetch<TData, TParams>, options: Options<TData, TParams>): PluginReturn<TData, TParams>;
  onInit?: (options: Options<TData, TParams>) => Partial<FetchState<TData, TParams>>;
};

// for index
// export type OptionsWithoutFormat<TData, TParams extends any[]> = Omit<Options<TData, TParams>, 'formatResult'>;

// export interface OptionsWithFormat<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any> extends Omit<Options<TTFormated, TParams>, 'formatResult'> {
//   formatResult: (res: TData) => TFormated;
// };

export interface Result<TData, TParams extends any[]> {
  cancel: Fetch<TData, TParams>['cancel'];
  data?: TData;
  error?: Error;
  loading: boolean;
  mutate: Fetch<TData, TParams>['mutate'];
  params: TParams | [];
  refresh: Fetch<TData, TParams>['refresh'];
  refreshAsync: Fetch<TData, TParams>['refreshAsync'];
  run: Fetch<TData, TParams>['run'];
  runAsync: Fetch<TData, TParams>['runAsync'];
}

export type Timeout = ReturnType<typeof setTimeout>;
