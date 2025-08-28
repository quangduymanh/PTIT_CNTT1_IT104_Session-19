export type LoginState = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

export type LoginAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_ERROR'; payload: string };

export const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { loading: true, success: false, error: null };
    case 'LOGIN_SUCCESS':
      return { loading: false, success: true, error: null };
    case 'LOGIN_ERROR':
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
