import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';

export default function Headers() {
  const [headers, setHeaders] = React.useState('');

  function format() {
    try {
      const formattedHeaders = {};
      headers.split('\n').forEach((header) => {
        const [key, val] = header.split(':');
        const newKey = unescape(key.trim());
        formattedHeaders[newKey] = unescape(val.trim());
      });
      setHeaders(JSON.stringify(formattedHeaders, null, 2));
    // eslint-disable-next-line no-empty
    } catch (err) {}
  }

  return (
    <>
      <Head title="Connor Stevens" />
      <main className="flex flex-col pt-32 items-center min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-semibold text-4xl pb-8">Headers</div>
          <textarea
            value={headers}
            onChange={({ target }) => setHeaders(target.value)}
            style={{
              resize: 'none', width: '100vh', height: '400px', padding: '0.5em',
            }}
            className="border-2 border-color-white bg-transparent rounded focus:outline-none"
          />
        </div>
        <div className="mx-0">
          <button className="bg-transparent border-2 hover:bg-white text-black font-semibold hover:text-white py-2 px-4 rounded transition focus:outline-none dark:text-white dark:hover:text-black" type="button" onClick={() => format()}>Format</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
