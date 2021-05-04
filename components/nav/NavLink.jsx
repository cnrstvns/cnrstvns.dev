/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavContext from '../../context/NavContext';

const NavLink = ({ href, title, active }) => {
  const { setOpen } = useContext(NavContext);
  const isActive = href === active;

  return (
    <Link onclick={() => setOpen(false)} href={href}>
      <a
        className={classNames('block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 hover:text-blue-500 transition', {
          underline: isActive,
        })}
      >
        { title }
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLink;
