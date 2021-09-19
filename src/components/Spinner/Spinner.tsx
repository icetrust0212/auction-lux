import { Spinner } from 'react-bootstrap';

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