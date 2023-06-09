import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func.isRequired,
};
