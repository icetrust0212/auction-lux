import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import SignPage from '../SignPage/SignPage';

type Inputs = {
    username: string,
    email: string,
    password: string,
    confirm_pass: string,
  };


const SignInPage = ({ pristine, reset, submitting }: PropsType) => {
    
  return (
    <SignPage title="Login to your account" imgUrl="/assets/images/login.jpg">
        <SignInForm />
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
