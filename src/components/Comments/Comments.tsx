import { useState } from 'react';
import { ChevronDown, Reply } from 'react-bootstrap-icons'
import CommentForm from '../CommentForm/CommentForm'
import './comments.css'

const commentList = [
    {
        id: 1,
        name: 'PPID',
        avatar: 'https://media.istockphoto.com/photos/portrait-of-attractive-young-model-with-happy-face-and-beautiful-picture-id1164766279?k=6&m=1164766279&s=612x612&w=0&h=_ZmzKnC6qHXqiiyRNfmGnR2lY8hWZ-GITZKHQCfR6bs=',
        comment: 'I am going to win this auction for my sister',
    },
    {
        id: 2,
        name: 'SS',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1k5hYK6Ug8Xj8Oj6dyIwBuOglwY1ErmwYAg&usqp=CAU',
        comment: 'I am going to win this auction for my sister',
    },
    {
        id: 3,
        name: 'PPID',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuJfsgJP8GP0bAt-YRDXiXow8uPKzIa-Ekg&usqp=CAU',
        comment: 'I am going to win this auction for my sister',
    },
    {
        id: 4,
        name: 'PPID',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61EgzhR3j5nTJWeF9JOM03kyZd6uQOUUmxA&usqp=CAU',
        comment: 'I am going to win this auction for my sister',
    }
];
const Comments = (props: PropsType) => {
    const [activeComment, setActiveComment] = useState(1);
    return (
        <div className="comments-wrapper">
            <h2 className="title color-secondary size-extremely-large w-100 text-center mb-5">Comments</h2>
            <CommentForm limit={60} />
            <ul className="list-unstyled comment-list">
                {
                    commentList.map(comment => {
                        return (
                            <li className="comment" onMouseOver={() => {
                                setActiveComment(comment.id)
                            }}>
                                <img src={comment.avatar} alt="avatar" />
                                <label className="size-medium color-light">{comment.comment}</label>
                                <div className={"tool-buttons" + (activeComment === comment.id ? ' active' : '')}>
                                    <Reply color="var(--text-color-light)" />
                                    <ChevronDown color="var(--text-color-light)" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

interface PropsType {

}

export default Comments;