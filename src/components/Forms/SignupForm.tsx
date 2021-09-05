import { FormValidator } from '../common/Validation/formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'
import { PersonFill } from 'react-bootstrap-icons'
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/actions';
import { useState } from 'react'


type Inputs = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  confirm_pass: string,
};

const SignupForm = (props: any) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    let username = data.firstname + data.lastname;
    if(isCorrectPass===true) dispatch(userActions.login(username,data.password));
  }
  const [isCorrectPass,setPassState] = useState(true);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onPassKeyUp = (e:any) => {
    setPassword(e.target.value)
    if(e.target.value === confirm) setPassState(true);
    else setPassState(false)
  }

  const onConfirmKeyUp = (e:any) => {
    setConfirm(e.target.value)
    if(password === e.target.value) setPassState(true);
    else setPassState(false)
  }

  return (
    <form name='signup-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='container signup-content'>
        <div className='userinfo-1'>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>First Name</label>
            </div>

            <div className='col-md-7 msg-wrapper'>
              <input
                {...register("firstname", { required: true })}
                placeholder="Your first name"
                type="text"
              />
              {errors.firstname?.type === 'required' && <span className="msg-valid">First Name is required</span>}
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Last Name</label>
            </div>

            <div className='col-md-7 msg-wrapper'>
              <input
                {...register("lastname", { required: true })}
                placeholder="Your last name"
                type="text"
              />
              {errors.lastname?.type === 'required' && <span className="msg-valid">Last Name is required</span>}
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Email</label>
            </div>

            <div className='col-md-7 msg-wrapper'>
              <input
                {...register("email", { required: true })}
                placeholder="You@whatemail.com"
                type="email"
              />
              {errors.email?.type === 'required' && <span className="msg-valid">Email is required</span>}
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Password</label>
            </div>

            <div className='col-md-7 msg-wrapper'>
              <input
                {...register("password", { required: true })}
                placeholder="Your password"
                type="password"
                onKeyUp={onPassKeyUp}
              />
              {errors.password?.type === 'required' && <span className="msg-valid">Password is required</span>}
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Confirm Password</label>
            </div>

            <div className='col-md-7 msg-wrapper'>
              <input
                {...register("confirm_pass", { required: true })}
                placeholder="Your password confirm"
                type="password"
                onKeyUp={onConfirmKeyUp}
              />
              {
              (errors.confirm_pass?.type === 'required' && <span className="msg-valid">Password Confirm is required</span>)
              || (isCorrectPass !== true && <span className="msg-valid">Password is incorrect</span>)
              }
            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='row layer'>
            <div className='col-md-5 btn-wrapper'>
              <button
                type='button'
                className='btn-entire'
                onClick={() =>
                  props.signup_drop === true
                    ? props.setActiveDrop(false)
                    : props.setActiveDrop(true)
                }
              >
                {props.signup_drop === true ? 'Get Greedy' : 'Get Free Entries'}
              </button>
            </div>
            <div className='col-md-1 short-label'>or</div>
            <div className='col-md-5'>
              <button className='btn-winning'>Register</button>
            </div>
          </div>
          <div className='row footer-caption'>
            <a>see Term & Rules</a>
          </div>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
})(SignupForm)

interface PropsType {
  handleSubmit: () => void,
  pristine: boolean,
  reset: () => void,
  submitting: boolean
}