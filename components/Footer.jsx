import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="dark:bg-black">
    <div className="border-t border-gray-700 text-2xl py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 mb-6 md:mb-0">
            <div className="dark:text-white font-medium mb-2">
              Connor Stevens
            </div>
            <div className="text-base dark:text-gray-400 mb-2">
              <a href="mailto:conmail1224@gmail.com">
                <FontAwesomeIcon size="lg" style={{ marginRight: '13px' }} icon={faEnvelope} />
                conmail1224(at)gmail(dot)com
              </a>
            </div>
            <div className="text-base dark:text-gray-500">
              © 2021 Connor Stevens. All rights reserved.
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wider uppercase">Businesses</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="https://eqpt.io" className="text-base text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition">EQPT Tools</a></li>
              <li><a href="https://soletech.io" className="text-base text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition">Sole Tech LLC</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wider uppercase">Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="https://github.com/connorstevens" className="text-base text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition">GitHub</a></li>
              <li><a href="https://twitter.com/cnrstvns" className="text-base text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition">Twitter</a></li>
              <li><a href="https://linkedin.com/in/connorstevens26" className="text-base text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
