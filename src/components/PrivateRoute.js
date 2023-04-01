import { isAuthenticated } from '../utils/auth';
import { Navigate } from 'react-router-dom';
import { useCallback, Fragment } from 'react';

const PrivateRoute = ({ children }) => {
    return (
        isAuthenticated() ?
            <Fragment>
              {children}
            </Fragment>
        :  <Navigate to="/login" />
    );
}

export default PrivateRoute;
