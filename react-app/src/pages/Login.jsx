import {useDispatch} from "react-redux";
import {login} from "../store/authSlice";
import {useNavigate} from "react-router-dom";   

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogin(e) {
        dispatch(login({email: 'test@test.com', password: 'password'}));
        navigate('/');
    }

    return (
        <div>
            <h2>Страница входа</h2>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
}

export default Login;