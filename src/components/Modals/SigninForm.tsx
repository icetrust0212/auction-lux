import { FormValidator } from './formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, warning } }: FieldPropsType) => (
  <div className='col-md-4'>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SigninForm = ({ handleSubmit, pristine, reset, submitting }: PropsType) => {

  const onSubmit = (e: any) => {
    if (handleSubmit) handleSubmit();
  }

  return (
    <form name='signin-form' onSubmit={onSubmit}>
      <div className='signin-content'>
        <div className='row'>
          <div className='col-md-4 title-label'>
            <label>Username:</label>
          </div>
          <Field
            name='username'
            id='username'
            type='text'
            component={renderField}
            validate={[FormValidator.required]}
          />
        </div>

        <div className='row mt-4'>
          <div className='col-md-4 title-label'>
            <label>password:</label>
          </div>
          <Field
            name='password'
            id='password'
            type='password'
            component={renderField}
            validate={[FormValidator.required]}
          />
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

interface FieldPropsType {
    input: any,
    label: any,
    type: any,
    meta: any
}

export default reduxForm({
  form: 'signInForm', // a unique identifier for this form
})(SigninForm)
