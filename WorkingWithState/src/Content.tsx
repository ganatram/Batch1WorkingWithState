import { useContext } from 'react';
import { AppContext } from './AppContext';

type Props = {
  permissions: undefined | string[];
};
export function Content() {
  const { permissions } = useContext(AppContext); // { user, permissions, loading,location dispatch }

  if (permissions === undefined) {
    return null;
  }

  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">Some important stuff that only an admin can do</p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions</p>
  );
}
