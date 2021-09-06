import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/actions';
import './SignInForm.css';
import { Link } from 'react-router-dom';

type Inputs = {
    username: string,
    password: string,
};


const SignInForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(userActions.login(data.username, data.password));
    }

    return (
        <div className="signin-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>

                    <input
                        {...register("username", { required: true })}
                        type="text"
                        className="form-control" placeholder="Enter Username"
                    />
                    {errors.username?.type === 'required' && <span className="msg-valid">username is required</span>}
                </div>
                <div className="form-group ">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        {...register("password", { required: true })}
                        type='password'
                        className="form-control"
                        placeholder="Enter Password"
                    />
                    {errors.password?.type === 'required' && <span className='msg-valid'>password is required</span>}
                </div>
                <button className="btn btn-block login-btn mb-4" type="submit">Login</button>
            </form>
            <a href="#!" className="forgot-password-link">Forgot password?</a>
            <p className="login-card-footer-text mt-2">Don't have an account? <Link to="/register" className="text-reset">Register here</Link></p>
        </div>
    );
}

export default SignInForm;
