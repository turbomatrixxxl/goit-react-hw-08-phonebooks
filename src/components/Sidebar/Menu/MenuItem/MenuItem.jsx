import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import styles from './MenuItem.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  align-items: center;
  display: flex;
  gap: 24px;

  &.active {
    color: #ff6b0a;
  }
`;

function MenuItem({ item, isActive, isVisible }) {
  // console.log(item);
  const nameClass = clsx(styles.menuItem, isActive && styles.menuItemActive);

  // const address = 'goit-react-hw-8-phonebook/';

  return (
    isVisible && (
      <li className={nameClass}>
        <StyledLink to={`/${item.name.toLowerCase()}`}>{item.name}</StyledLink>
      </li>
    )
  );
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  isVisible: PropTypes.bool,
};

export default MenuItem;
