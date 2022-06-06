import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Link({
  href, children, color, size, active, external,
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel="noreferrer"
      className={classNames('text-base text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition', {
        '!text-blue-400 hover:!text-blue-500': color,
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        '!text-gray-300': active,
      })}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  active: PropTypes.bool,
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};
