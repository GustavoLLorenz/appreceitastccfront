import PropTypes from 'prop-types';

function CardRecipe({ imageSrc, index, name }) {
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

CardRecipe.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardRecipe;
