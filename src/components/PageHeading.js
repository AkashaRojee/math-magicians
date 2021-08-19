import PropTypes from 'prop-types';

const PageHeading = (props) => {
  const { value } = props;
  return (
    <h2>{value}</h2>
  );
};

PageHeading.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PageHeading;
