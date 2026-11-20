import { createContext, useReducer, ReactNode } from 'react';
import { User } from './api/authenticate';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};
