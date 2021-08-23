import CommentForm from '../CommentForm/CommentForm'
import './comments.css'
const Comments = (props: PropsType) => {
    return (
        <div className="comments-wrapper">
            <h2 className="title color-secondary size-extremely-large w-100 text-center mb-5">Comments</h2>
            <CommentForm limit={60}/>
        </div>

    )
}

interface PropsType {

}

export default Comments;