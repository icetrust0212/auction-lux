import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomSpinner = () => {
    return (
        <div>
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div >
      );
}

export default CustomSpinner;