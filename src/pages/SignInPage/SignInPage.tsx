import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import SignPage from '../SignPage/SignPage';

type Inputs = {
    username: string,
    email: string,
    password: string,
    confirm_pass: string,
  };


const SignInPage = ({ pristine, reset, submitting, handleNotification }: PropsType) => {

  return (
    <SignPage title="Login to your account" imgUrl="/assets/images/login.jpg">
        <SignInForm handleNotification={handleNotification}/>
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
