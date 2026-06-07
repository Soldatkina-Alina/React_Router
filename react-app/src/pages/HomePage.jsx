import {useDispatch, useSelector} from 'react-redux';
import {logout} from "../store/authSlice";

function HomePage() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1>Главная страница</h1>
            {isAuth ? (
                <>
                    <p>Добро пожаловать, {user?.name}</p>
                    <button onClick={() => dispatch(logout())}>Выйти</button>
                </>
            ) : (
                <p>Вы не авторизованы</p>
            )}
        </div>
    );
}

export default HomePage;