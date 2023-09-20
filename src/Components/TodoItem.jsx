import './TodoItem.css';
import PropTypes from 'prop-types';

 export function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? "TodoItem--completed" : null}`}>
      <span className={`Icon Icon-check`}>
        V
      </span>
      <p className={`TodoItem-p`}>
        {props.text}
      </p>
      <span className={`Icon Icon-delete`}>
        X
      </span>
    </li>
  );
}

TodoItem.propTypes  = {
  text: PropTypes.string.isRequired,
	completed: PropTypes.bool
}
