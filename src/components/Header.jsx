import PropTypes from 'prop-types';

function Header(props) {
  const { children } = props;

  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
