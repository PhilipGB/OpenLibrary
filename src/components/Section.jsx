import PropTypes from 'prop-types';

function Section(props) {
  const { children } = props;

  return <section className='p-10 max-w-screen-sm'>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.any,
};
export default Section;
