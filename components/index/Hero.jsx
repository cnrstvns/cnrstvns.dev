import Link from 'next/link';

const Hero = () => (
  <section className="xl:w-2/3 lg:mr-auto md:w-full md:px-10 sm:w-full sm:px-10 h-screen">
    <p>Hi, I'm</p>
    <h1 className="text-3xl mt-4 lg:text-5xl font-bold text-black dark:text-white">
      Connor Stevens
    </h1>
    <p className="font-mb-1 mt-4">
      I'm a second year Computing and Information Technologies student at the
      {' '}
      <a className="text-blue-500 hover:text-blue-600" href="https://rit.edu">Rochester Institute of Technology</a>
      .
    </p>
    <p className="mb-1 mt-4">
      I'm a hardworking student with a passion for Information Technology and programming. I am looking to apply my knowledge in the industry for Summer 2021 in a Co-Op. I'd like to discuss my skills and any opportunities with you.
    </p>
    <p className="mb-1 mt-4">
      In my free time, I run my software company, Sole Tech LLC. I currently serve 20+ clients with SaaS solutions on Discord. I am also in the process of releasing my first cross-platform desktop application, EQPT Tools. More information can be found below.
    </p>
    <div className="flex flex-row mt-6">
      <Link href="https://github.com/connorstevens">
        <a className="flex items-center px-4 py-2 border rounded text-sm leading-none text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 mr-4 lg:mt-0">
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
      <Link href="https://soletech.io">
        <a className="flex items-center px-4 py-2 border rounded text-sm leading-none text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 mr-4 lg:mt-0">
          Sole Tech
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
      <Link href="https://eqpt.io">
        <a className="flex items-center px-4 py-2 border rounded text-sm leading-none text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 mr-4 lg:mt-0">
          EQPT Tools
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
    </div>
  </section>
);

export default Hero;
