import { useState, useEffect } from 'react';

import './Footer.css';

const Footer = () => {
  const [emoji, setEmoji] = useState();

  useEffect(() => {
    const emojiCombination = ['❤️', '💻', '✨', '🍕', '⚛️'];
    let counter = 0;

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
    <div className="footer__container">
      <p className="footer__p">
        Offline Todo List Application — made with
        {emoji} by{' '}
        <a
          href="https://github.com/arthur-melo"
          rel="noopener noreferrer"
          target="_blank">
          @arthur-melo
        </a>
      </p>
    </div>
  );
};

export default Footer;
