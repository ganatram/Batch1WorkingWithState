import { createContext, useReducer, ReactNode } from 'react';
import { User } from './api/authenticate';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
  location: string;
};

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
  location: 'Mangalore',
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

type AppContextType = State & {
  dispatch: React.Dispatch<Action>;
};

// step 1 - create our context - createContext:
export const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

//Step 2 - create a component , which returns our context as a provider in template

export function AppProvider({ children }: Props) {
  const [{ user, permissions, loading, location }, dispatch] = useReducer(myReducer, initialState);

  return (
    <AppContext.Provider value={{ user, permissions, loading, location, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
