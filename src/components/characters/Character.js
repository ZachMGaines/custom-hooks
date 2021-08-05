import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, status, image, id }) => (
  <Link to={`character/${id}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p>{status}</p>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}.isRequired;

export default Character;
