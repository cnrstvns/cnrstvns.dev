import * as React from 'react';
import { useRouter } from 'next/router';
import slugify from 'slugify';

import Head from '../../components/Head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import articles from '../../data/articles';

export default function Article() {
  const router = useRouter();
  const article = router.query.id;

  return (
    <>
      <Head title="Articles | Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-32 min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-semibold text-4xl pb-8">Article</div>
          <p>things go here?</p>
          <p>
            ideally the
            {' '}
            { article}
            {' '}
            article goes here...
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
