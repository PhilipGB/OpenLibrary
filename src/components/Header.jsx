import PropTypes from 'prop-types';

function Header(props) {
  const { children } = props;

  return (
    <header className='w-full bg-white shadow-md py-6'>
      <h1 className='text-xl font-medium px-4 mx-4'>{children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
