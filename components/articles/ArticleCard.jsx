/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import slugify from 'slugify';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Badge from '../Badge';

const ArticleCard = function ArticleCard({
  title, description, published, badges,
}) {
  dayjs.extend(relativeTime);
  const publishedTime = dayjs(published).fromNow().toString();

  return (
    <div className="flex flex-col min-w-full py-2 border-b mb-5">
      <Link href={`/articles/${slugify(title, { lower: true })}`}>
        <div className="text-xl text-black font-medium hover:text-blue-500 hover-auto cursor-pointer pb-2 dark:text-white transition">{ title }</div>
      </Link>
      <div className="text-base dark:text-gray-300 font-regular">{ description }</div>
      <div className="mt-auto">
        <div className="py-2 text-sm text-gray-700 dark:text-gray-400">
          Published:
          {' '}
          { publishedTime }
          {' • '}
          { badges.map((badge, i) => <Badge key={i} {...badge} />)}
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  badges: PropTypes.array.isRequired,
};

export default ArticleCard;
