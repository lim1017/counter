import { useSelector } from 'react-redux';
import { increment, decrement, set } from '../redux/actions';
import { useActions } from './useActions';

export const useCounter = () => {
  const count = useSelector((state) => state.count);

  const actions = useActions({ increment, decrement, set });

  return { count, ...actions };
};
