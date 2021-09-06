import './SignPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignPage = ({imgUrl, children, title}: PropsType) => {
 
  return (
    <div className="d-flex align-items-center min-vh-100 sign-container">
        <div className="card login-card">
          <div className="row no-gutters ">
            <div className="col-md-5 custom-wrapper">
              <img src={imgUrl} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7 custom-wrapper">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src="/assets/images/logo-golden.png" alt="logo" className="logo" />
                </div>
                <p className="login-card-description">{title}</p>

                {children}

                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

interface PropsType {
    title: string,
    children: any,
    imgUrl: string,
}

export default SignPage;
