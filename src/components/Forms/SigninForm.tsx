import { FormValidator } from '../common/Validation/formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, id, name, type, meta: { touched, error, warning } }: FieldPropsType) => (
  <div className='col-md-6 msg-wrapper'>
    <input {...input} id={id} name={name} type={type} />
    {touched && ((error && <span className = "msg-valid">{error}</span>) || (warning && <span className='msg-valid'>{warning}</span>))}
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
          <div className='col-md-5 title-label'>
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

        <div className='row mt-5'>
          <div className='col-md-5 title-label'>
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
          <button type='button'>Earn Free Entries</button>
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
    id: any,
    name: any,
    type: any,
    meta: any
}

export default reduxForm({
  form: 'signInForm', // a unique identifier for this form
})(SigninForm)
