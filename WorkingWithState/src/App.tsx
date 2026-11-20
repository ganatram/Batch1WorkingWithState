/* import { useReducer } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';






export function App() {
  const [{ user, permissions, loading }, dispatch] = useReducer(myReducer, initialState);

  async function handleSignInClick() {
    dispatch({ type: 'authenticate' });
    const authenticatedUser = await authenticate(); // { id: '1', name: 'Bob' }
    console.log(authenticatedUser); // { id: '1', name: 'Bob' }
    dispatch({
      type: 'authenticated',
      user: authenticatedUser, // { id: '1', name: 'Bob' }
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: 'authorize' }); // loading:true
      const authorizedPermissions = await authorize(authenticatedUser.id); // ['admin']
      dispatch({
        type: 'authorized',
        permissions: authorizedPermissions, // ['admin']
      });
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
      <Main user={user} permissions={permissions} />
    </div>
  );
}
 */

import { AppProvider } from './AppContext';
import { Header } from './Header';
import { Main } from './Main';

export function App() {
  return (
    <div>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}
