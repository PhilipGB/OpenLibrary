import PropTypes from 'prop-types';

function Button(props) {
  const { children, onClick } = props;

  return (
    <button
      className='bg-pink-600 py-2 px-4 rounded-md text-white hover:bg-pink-500 border-inherit max-w-fit'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
