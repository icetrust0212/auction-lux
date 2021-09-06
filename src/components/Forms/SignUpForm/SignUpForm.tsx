import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/actions';
import './SignUpForm.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Inputs = {
    username: string,
    email: string,
    password: string,
    confirm_pass: string,
};


const SignUpForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        if (isCorrectPass === true) dispatch(userActions.signUp(data));
    }
    const [isCorrectPass, setPassState] = useState(true);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const onPassKeyUp = (e: any) => {
        setPassword(e.target.value)
        if (e.target.value === confirm) setPassState(true);
        else setPassState(false)
    }

    const onConfirmKeyUp = (e: any) => {
        setConfirm(e.target.value)
        if (password === e.target.value) setPassState(true);
        else setPassState(false)
    }
    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="form-group col-md-6 col-sm-12">
                        <label htmlFor="email" className="sr-only">Username</label>

                        <input
                            {...register("username", { required: true })}
                            type="text"
                            className="form-control" placeholder="Enter Username"
                        />
                        {errors.username?.type === 'required' && <span className="msg-valid">username is required</span>}
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <input
                            {...register("email", { required: true })}
                            type="email"
                            className="form-control" placeholder="Enter Email"
                        />
                        {errors.username?.type === 'required' && <span className="msg-valid">email is required</span>}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6 col-sm-12">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type='password'
                            className="form-control"
                            placeholder="Enter Password"
                            onKeyUp={onPassKeyUp}
                        />
                        {errors.password?.type === 'required' && <span className='msg-valid'>password is required</span>}
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                        <label htmlFor="password" className="sr-only">Confirm Password</label>
                        <input
                            {...register("confirm_pass", { required: true })}
                            type='password'
                            className="form-control"
                            placeholder="Enter Password"
                            onKeyUp={onConfirmKeyUp}
                        />
                        {
                            (errors.confirm_pass?.type === 'required' && <span className="msg-valid">Password Confirm is required</span>)
                            || (isCorrectPass !== true && <span className="msg-valid">Password is incorrect</span>)
                        }
                    </div>
                </div>
                <button className="btn btn-block login-btn mb-4" type="submit">SignUp</button>
            </form>
            <p className="login-card-footer-text mt-2">Do you already have an account? <Link to="/login" className="text-reset">Sign in here</Link></p>

        </div>
    )
}


export default SignUpForm;
