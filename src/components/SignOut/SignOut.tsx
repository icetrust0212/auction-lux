import { useDispatch } from "react-redux";
import { userActions } from "../../store/actions";
import SignModal from "../Modals/SignModal";
import './SignOut.css';

const SignOut = ({onHide, show}:PropsType) => {
    const dispatch = useDispatch();
    
    return (
        <SignModal title="Signout" onHide={onHide} show={show} >
            <div className="signout-body">
                <h5>Do you want to Sign Out?</h5>
                <div className="modal-footer d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-primary" onClick={() => {
                        dispatch(userActions.logout());
                        onHide();
                    }}>OK</button>
                    <button className="btn btn-secondary" onClick={() => onHide()}>Cancel</button>
                </div>
            </div>

        </SignModal>
    )
}
interface PropsType {
    onHide: () => void;
    show: boolean
}

export default SignOut;