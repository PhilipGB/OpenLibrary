import PropTypes from 'prop-types';

function ListCard(props) {
  const { children } = props;

  return (
    <li className='bg-white rounded-md mb-1 py-4 px-6 w-auto [&>*]:py-1'>
      {children}
    </li>
  );
}

ListCard.propTypes = {
  children: PropTypes.any,
};

export default ListCard;
