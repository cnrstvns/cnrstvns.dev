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
      <Head title="Headers — Connor Stevens" />
      <main className="pt-32 min-h-screen px-6 lg:px-32 text-black bg-black text-white">
        <div className="w-full w-1/2">
          <div className="font-semibold text-4xl pb-8">Headers</div>
          <textarea
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
            className="border-2 resize-none border-white bg-transparent rounded focus:outline-none h-80 w-full p-2"
          />
        </div>
        <button className="mt-2 p-1.5 px-4 text-white border-2 border-white rounded hover:bg-white hover:text-black transition" type="button" onClick={() => format()}>Format</button>
      </main>
      <Footer />
    </>
  );
}
