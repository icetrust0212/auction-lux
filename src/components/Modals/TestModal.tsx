import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestModal = (props: PropTypes) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Modal Body
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onOK}>OK</Button>
      </Modal.Footer>
    </Modal>
  )
}

interface PropTypes {
  onHide: () => void,
  onOK: () => void,
}
export default TestModal;