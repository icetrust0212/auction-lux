import { FormValidator } from './formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'

const renderField = (props: any) => (
  <div className='col-md-4'>
    <input type={props.type} name={props.name} id={props.id} />
    {props.touched &&
      ((props.error && <span>{props.error}</span>) ||
        (props.warning && <span>{props.warning}</span>))}
  </div>
)

const SigninForm = () => {
  const handleSubmit = () => {
  }

  return (
    <form name='signin-form' onSubmit={handleSubmit}>
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

          <div className='col-md-4 button-enter'>
            <button>ENTER</button>
          </div>
        </div>

        <div className='row button-wrapper'>
          <button type='button'>Earn Free Entries</button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
})(SigninForm)
