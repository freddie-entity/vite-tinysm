import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentUser } from '../../features/user/userSelector';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
