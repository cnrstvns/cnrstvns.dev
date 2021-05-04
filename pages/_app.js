import React, { useState } from 'react';
import NavContext from '../context/NavContext';

import 'tailwindcss/tailwind.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {

  const [ open, setOpen ] = useState(false);

  return (
    <NavContext.Provider value={{ open, setOpen }}>
      <Component {...pageProps} />
    </NavContext.Provider>
  );
}

export default MyApp;
