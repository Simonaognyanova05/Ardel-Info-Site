export default function Login() {
    return (
        <section className="tm-section-pad-top" id="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="text-center mb-4">Вход в системата</h4>

                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Имейл</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Въведете имейл"
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label htmlFor="password">Парола</label>
                                        <input
                                            type="password"
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
