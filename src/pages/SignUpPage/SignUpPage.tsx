import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import SignPage from '../SignPage/SignPage';

type Inputs = {
    username: string,
    email: string,
    password: string,
    confirm_pass: string,
  };


const SignInPage = ({ pristine, reset, submitting }: PropsType) => {
    
  return (
    <SignPage title="Register your account" imgUrl="/assets/images/signup.jpg">
        <SignUpForm />
    </SignPage>
  )
}

interface PropsType {
  handleSubmit: () => void,
  pristine: boolean,
  reset: () => void,
  submitting: boolean
}

export default SignInPage;
