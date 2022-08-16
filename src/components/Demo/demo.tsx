import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSomeData } from 'store/app/selectors';
import { someSyncAction, someAsyncAction } from 'store/app/actions';
import { AppDispatch } from 'store/types';

export const Demo = () => {
  const data = useSelector(selectSomeData);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = useCallback(() => {
    dispatch(someSyncAction(1));
  }, [dispatch, someSyncAction]);

  useEffect(() => {
    dispatch(someAsyncAction());
  }, [dispatch, someAsyncAction]);

  return (
    <div>
      {data} <button onClick={onClick}>Click</button>
    </div>
  );
};
