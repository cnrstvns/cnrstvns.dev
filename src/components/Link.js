import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Link({ href, children, color, size }) {
  return (
    <a
      href={href}
      className={classNames('text-gray-400 hover:text-gray-500 transition', {
        '!text-blue-400 hover:!text-blue-500': color,
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
      })}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
