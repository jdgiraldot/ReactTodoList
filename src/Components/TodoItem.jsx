import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

 export function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--completed" : null}`}>
      <FontAwesomeIcon icon={faCircleCheck} className="Icon Icon-check" />
      <p className="TodoItem-p">
        {props.text}
      </p>
      <FontAwesomeIcon icon={faTrash} className="Icon Icon-delete" />
    </li>
  );
}

TodoItem.propTypes  = {
  text: PropTypes.string.isRequired,
	completed: PropTypes.bool
}
