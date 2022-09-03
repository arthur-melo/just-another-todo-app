import { useState, useEffect } from 'react';

import './Footer.css';

const Footer = () => {
  const [emoji, setEmoji] = useState();

  useEffect(() => {
    const emojiCombination = ['❤️', '💻', '✨', '🍕', '⚛️'];
    let counter = 0;

    setEmoji(emojiCombination.at(counter));
    counter++;

    const intervalId = setInterval(() => {
      if (counter >= emojiCombination.length) {
        counter = 0;
      }
      setEmoji(emojiCombination.at(counter));
      counter++;
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-light text-center d-flex h-100 justify-content-center align-items-center p-1">
      <div className="wrapper">
        {' '}
        <p className="footer__p">
          This app runs offline and doesn't use analytics.
        </p>
        <p className="footer__p">Keep your data safe in your browser!</p>
        <p className="footer__p">
          Made with {emoji} by{' '}
          <a
            className="text-info"
            href="https://github.com/arthur-melo"
            rel="noopener noreferrer"
            target="_blank">
            @arthur-melo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
