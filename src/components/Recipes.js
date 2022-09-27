import PropTypes from 'prop-types';

function Recipes({ imageSrc, index, name }) {
  console.log(index);
  console.log(`${index}-recipe-card`);
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ imageSrc }
        data-testid={ `${index}-card-img` }
        alt={ `${index}-${name}-alt` }
      />
      <p data-testid={ `${index}-card-name` }>{ name }</p>
    </div>
  );
}

Recipes.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Recipes;
