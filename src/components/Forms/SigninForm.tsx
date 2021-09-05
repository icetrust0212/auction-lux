import { FormValidator } from '../common/Validation/formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'

import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/actions';

type Inputs = {
  username: string,
  password: string,
};


const SigninForm = ({ pristine, reset, submitting }: PropsType) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(userActions.login(data.username, data.password));
  }

  return (
    <form name='signin-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='signin-content'>
        <div className='row'>
          <div className='col-md-5 title-label'>
            <label>Username:</label>
          </div>
          <input
            {...register("username", { required: true })}
            type="text"
          />
          {errors.username?.type === 'required' && <span>username is required</span>}
        </div>

        <div className='row mt-5'>
          <div className='col-md-5 title-label'>
            <label>password:</label>
          </div>
          <input
            {...register("password", { required: true })}
            type='password'
          />
          {errors.password?.type === 'required' && <span>password is required</span>}
        </div>
        <div className='row button-wrapper'>
          <button type='submit'>Log in</button>
        </div>
      </div>
    </form>
  )
}

interface PropsType {
  handleSubmit: () => void,
  pristine: boolean,
  reset: () => void,
  submitting: boolean
}

export default reduxForm({
  form: 'signInForm', // a unique identifier for this form
})(SigninForm)
