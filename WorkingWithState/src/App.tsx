import { useReducer } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

type Action =
  | {
      type: 'authenticate';
    }
  | {
      type: 'authenticated';
      user: User | undefined;
    }
  | {
      type: 'authorize';
    }
  | {
      type: 'authorized';
      permissions: string[];
    };

function myReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'authenticate':
      return { ...state, loading: true };
    case 'authenticated':
      return { ...state, loading: false, user: action.user }; // loading:false,user:{ id: '1', name: 'Bob' }
    case 'authorize':
      return { ...state, loading: true }; // loading:true
    case 'authorized':
      return {
        ...state,
        loading: false, // loading:false
        permissions: action.permissions, // ['admin']
      };
    default:
      return state;
  }
}

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
