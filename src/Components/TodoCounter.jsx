import './TodoCounter.css';
import PropTypes from 'prop-types';

export function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      Has completado <br/> <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

TodoCounter.propTypes  = {
	total: PropTypes.number.isRequired,
	completed: PropTypes.number
}

TodoCounter.defaultProps = {
	total: 10,
	completed: 0
}
