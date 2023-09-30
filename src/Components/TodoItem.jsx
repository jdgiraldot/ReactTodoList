import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import './TodoItem.css'

export function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--completed" : null}`}>
      <FontAwesomeIcon 
        icon={faCircleCheck}
        className="Icon Icon-check"
        onClick={props.onComplete}
      />
      <p className="TodoItem-p">
        {props.text}
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  )
}

TodoItem.propTypes  = {
  text: PropTypes.string.isRequired,
	completed: PropTypes.bool,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func
}