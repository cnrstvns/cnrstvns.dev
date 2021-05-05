/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge';

const PortfolioCard = function PortfolioCard({
  name, date, stack, image,
}) {
  return (
    <div className="flex flex-col py-2 mb-10">
      <div className="text-xl text-black font-medium pb-2 dark:text-white">{ name }</div>
      <div className="overflow-hidden">
        <img className="max-h-80 min-h-0 mx-0 rounded-md" src={image} alt="" />
      </div>
      <div className="text-base dark:text-gray-300 font-regular pt-2">{date}</div>
      <div className="mt-auto">
        <div className="pb-2 text-sm text-gray-700 dark:text-gray-400" />
        { stack.map((tech, i) => <Badge key={i} {...tech} />)}
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  name: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioCard;
