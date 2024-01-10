import PropTypes from 'prop-types';

function Form(props) {
  const { name, children, onSubmit, disableSubmit = false } = props;

  return (
    <form onSubmit={onSubmit}>
      <h1 className='text-2xl font-medium mb-6'>{name}</h1>

      <ul className='flex-col max-w-screen-sm'>
        {children.map((child, index) => {
          return (
            <li key={index} className='max-w-screen-sm my-2'>
              {child}
            </li>
          );
        })}
        <li className='text-right'>
          <button
            className='bg-pink-600 py-2 px-4 rounded-md my-8 text-white hover:bg-pink-500 border-inherit'
            type='submit'
            disabled={disableSubmit}
          >
            Search
          </button>
        </li>
      </ul>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool,
};

export default Form;
