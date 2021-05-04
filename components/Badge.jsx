import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ title, variant }) => (
  <span className={classNames(
    'rounded px-2 py-1 mr-2 text-xs font-bold',
    {
      'bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200': variant === 'secondary',
    },
  )}
  >
    {title}
  </span>
);

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Badge;
