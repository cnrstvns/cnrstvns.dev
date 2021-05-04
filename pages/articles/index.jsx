import * as React from 'react';

import Head from '../../components/Head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ArticleCard from '../../components/articles/ArticleCard';
import articles from '../../data/articles';

export default function Articles() {
  return (
    <>
      <Head title="Articles | Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-32 min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-3xl mx-auto">
          <div className="font-semibold text-4xl pb-8">Articles</div>
          {
            articles.map((article) => <ArticleCard key={article.id} {...article} />)
          }
        </div>
      </main>
      <Footer />
    </>
  );
}
