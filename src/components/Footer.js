import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="border-t border-gray-700 text-2xl py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="col-span-2 mb-6 md:mb-0 space-y-2">
            <div className="text-white font-medium">
              Connor Stevens
            </div>
            <div className="space-x-3">
              <a href="https://github.com/connorstevens" className="text-base text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition">
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </a>
              <a href="https://twitter.com/cnrstvns" className="text-base text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition">
                <FontAwesomeIcon size="lg" icon={faTwitter} />
              </a>
              <a href="https://linkedin.com/in/connorstevens26" className="text-base text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition">
                <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
              </a>
              <a href="mailto:conmail1224@gmail.com" className="text-base text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition">
                <FontAwesomeIcon size="lg" icon={faEnvelope} />
              </a>
            </div>
            <div className="text-base text-gray-500">
              © 2021 Connor Stevens. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
