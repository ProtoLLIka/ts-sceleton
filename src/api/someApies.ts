import axios from 'axios';

// тут надо сделать общий тип для апи запросов вместе с apiFetcher который будет возвращаться ответ в одном формате
export const someAPI = async (): Promise<boolean> => {
  const mock = new Date().getTime() / 2 === 0;

  const promise = new Promise((res) => {
    setTimeout(() => res(mock), 1500);
  });

  const promiseResponse = await promise as boolean;

  return promiseResponse;
};
