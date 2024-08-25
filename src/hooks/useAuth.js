import { useSelector } from 'react-redux';
import {
  selectIsLoggedInAuth,
  selectUserAuth,
} from '../redux/auth/selectorsAuth';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedInAuth);
  const user = useSelector(selectUserAuth);
  return { isLoggedIn, user };
};
