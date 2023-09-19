import './TodoList.css';
import PropTypes from 'prop-types';

export function TodoList({ children }) {
  return (
    <ul className="TodoList">
      {children}
    </ul>
  );
}

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};