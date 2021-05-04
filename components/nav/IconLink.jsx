/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ href, ...props }) => (
  <Link href={href}>
    <a target="_blank" className="pr-4">
      <FontAwesomeIcon
        className="text-black dark:text-white hover:text-blue-600 transition"
        {...props}
      />
    </a>
  </Link>
);

export default IconLink;
