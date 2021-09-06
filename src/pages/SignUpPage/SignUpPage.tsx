import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import SignPage from '../SignPage/SignPage';

type Inputs = {
    username: string,
    email: string,
    password: string,
    confirm_pass: string,
  };


const SignInPage = ({ pristine, reset, submitting, handleNotification}: PropsType) => {
    
  return (
    <SignPage title="Register your account" imgUrl="/assets/images/signup.jpg">
        <SignUpForm handleNotification={handleNotification} />
    </SignPage>
  )
}

interface PropsType {
  handleSubmit: () => void,
  pristine: boolean,
  reset: () => void,
  submitting: boolean,
  handleNotification: (type: string, title: string, msg: string) => void;
}

export default SignInPage;
