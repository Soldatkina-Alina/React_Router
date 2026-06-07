import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function withAuth(Component) {
    return function ProtectedComponent(props) {
        const isAuthenticated = useSelector((state) => state.auth.isAuth);

        if (!isAuthenticated) {
            return <Navigate to="/login" replace />;
        }
        
        return <Component {...props} />;
    };
}   
export default withAuth;