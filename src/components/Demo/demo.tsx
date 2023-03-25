import React, { useEffect } from 'react';

import { action, asyncAction } from '@store/actions';
import { useAppDispatch } from '@store/index';

import * as S from './styled';

export const Demo: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action(2));
    dispatch(asyncAction(2));
  }, []);

  return <S.Button>Demo</S.Button>;
};
