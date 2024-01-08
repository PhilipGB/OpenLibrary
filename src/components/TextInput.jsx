import PropTypes from 'prop-types';

function TextInput(props) {
  const { name, value, onChange } = props;

  return (
    <label className='text-sm font-medium'>
      {name}
      <br />
      <input
        className='min-w-full text-lg p-2 border-2 rounded-md border-slate-400 focus:border-slate-500'
        type='text'
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        value={value ?? ''}
        onChange={onChange}
      />
    </label>
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
