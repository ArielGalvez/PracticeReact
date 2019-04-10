import React from 'react';
import Avatar from '../Avatar';
import './PersonPill.css';
import PropTypes from 'prop-types';

function PersonPill({ id, src, name, width, heigth, onChange, active }) {

  const calculateRadius = () => {
    const number = (parseInt(heigth.substring(0, heigth.length), 10) / 2) + 10;
    return number;
  }

  let stylePersonPill = {
    width: width,
    heigth: heigth,
    borderRadius: calculateRadius() + 'px'
  };
  const onPersonClick = () => {
    onChange(id);
  }

  const classPill = active ? 'selected' : '';
  return (
    <div className={`${classPill} person-pill`} style={stylePersonPill} onClick={onPersonClick}>
      <Avatar src={src} name={name} size={heigth} />
      <div className="content-pill">
        <h3>{name}</h3>
        <p>{"I am person!"}</p>
      </div>
    </div>
  );
}

PersonPill.defaultProps = {
  width: '400px',
  heigth: '80px',
  active: false
}

PersonPill.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  width: PropTypes.string,
  heigth: PropTypes.string,
  onChange: PropTypes.func,
  active: PropTypes.bool
}

export default PersonPill;