import { useNavigate } from 'react-router-dom';
import { login } from '../services/login';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        try {
            const result = await login(email, password);
            onLogin(result);
            navigate('/');

        } catch (e) {
            alert("Възникна грешка при влизане!")
        }


    }
    return (
        <section className="tm-section-pad-top" id="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="text-center mb-4">Вход в системата</h4>

                                <form onSubmit={loginHandler}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Имейл</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Въведете имейл"
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="password">Парола</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Въведете парола"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Вход
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
