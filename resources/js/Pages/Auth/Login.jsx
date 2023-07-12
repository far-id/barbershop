import React, { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import '../../../css/login.css';
import InputError from '@/Components/InputError';

function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
            <section>
                <div className="form-box">
                    <div className="form-value">

                        <form onSubmit={ submit }>
                            <h2>Login</h2>
                            { errors.email && (<p className="font-danger">{ errors.email }</p>) }
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={ data.email }
                                    className="block w-full mt-1"
                                    autoComplete="username"
                                    onChange={ (e) => setData('email', e.target.value) }
                                    autoFocus={ true }
                                    required />
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={ data.password }
                                    className="block w-full mt-1"
                                    autoComplete="current-password"
                                    onChange={ (e) => setData('password', e.target.value) }
                                    required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="forget">
                                <input
                                    id='remember'
                                    name="remember"
                                    type='checkbox'
                                    checked={ data.remember }
                                    onChange={ (e) => setData('remember', e.target.checked) }
                                />
                                <label htmlFor="remember">
                                    Remember Me &nbsp;
                                    { canResetPassword && (
                                        <Link href={ route('password.request') } >
                                            Forgot your password?
                                        </Link>
                                    ) }
                                </label>
                            </div>
                            <button disabled={ processing }>Log in</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;