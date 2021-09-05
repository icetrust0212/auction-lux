import { FormValidator } from '../common/Validation/formvalidation'
//@ts-ignore
import { Field, reduxForm } from 'redux-form'
import { PersonFill } from 'react-bootstrap-icons'

const renderField = ({ input, label, placeholder, id, name, type, meta: { touched, error, warning } }: FieldPropsType) => (
  <div className='row'>
    <div className='col-md-5 title-label2'>
      <label>{label}</label>
    </div>

    <div className='col-md-7 msg-wrapper'>
    <input {...input} id={id} name={name} type={type} placeholder={placeholder}/>
    {touched && ((error && <span className = "msg-valid">{error}</span>) || (warning && <span className='msg-valid'>{warning}</span>))}
    </div>
  </div>
)

const SignupForm = (props: any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(111);
  }

  return (
    <form name='signup-form' onSubmit={handleSubmit}>
      <div className='container signup-content'>
        <div className='userinfo-1'>
          <Field
            label='Full Name'
            name='username'
            id='username'
            type='text'
            placeholder='Your actual name'
            component={renderField}
            validate={[FormValidator.required]}
          />

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Email</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='You@whatemail.com'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Phone</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='phone'
                name='phone'
                placeholder='Where to text/call when you win'
              />
            </div>
          </div>
        </div>

        <div className='userinfo-2'>
          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Card Number</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='card_number'
                name='card_number'
                placeholder='The credit card number'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Expiration Date</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='exp_date'
                name='exp_date'
                placeholder='MM/YY'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Security Code</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='sec_code'
                name='sec_code'
                placeholder='CVV (Hint: look on the back)'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Billing Zip Code</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='zip_code'
                name='zip_code'
                placeholder='The zip code'
              />
            </div>
          </div>
        </div>

        <div className='userinfo-3'>
          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Create Username</label>
            </div>

            <div className='col-md-7'>
              <input
                type='text'
                id='new_username'
                name='new_username'
                placeholder='What name shall they fear?'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5 title-label2'>
              <label>Add Profile Image</label>
            </div>

            <div className='col-md-7'>
              <PersonFill fontSize={36} />
            </div>
          </div>
        </div>

        {props.signup_drop === true && (
          <div className='dropdown-urls'>
            <div className='caption'>
              <label className='part1'>
                Link Auctions to Your Social Media
              </label>

              <label className='part2'>Get up to $100 in Free Entries</label>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your Facebook URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='facebook'
                  name='facebook'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your Instagram URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='instagram'
                  name='instagram'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your Linkedin URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='linkedin'
                  name='linkedin'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your Twitter URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='twitter'
                  name='twitter'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your WeChat URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='wechat'
                  name='wechat'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your WhatsApp URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='whatsapp'
                  name='whatsapp'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your YouTube URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='youtube'
                  name='youtube'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your Pinterest URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='pinterest'
                  name='pinterest'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5 title-label2'>
                <label>Your SnapChat URL</label>
              </div>

              <div className='col-md-7'>
                <input
                  type='text'
                  id='snapchat'
                  name='snapchat'
                  placeholder='Worth $10 in Free Entries'
                />
              </div>
            </div>
          </div>
        )}

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
              <button className='btn-winning'>START WINNING</button>
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

interface FieldPropsType {
  input: any,
  label: any,
  placeholder: any,
  id: any,
  name: any,
  type: any,
  meta: any
}