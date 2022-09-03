import { useState, useEffect } from 'react';

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
        <p className="w-100 m-0">
          This app runs offline and doesn't use analytics.
        </p>
        <p className="w-100 m-0">Your data is safe in your device!</p>
        <p className="w-100 m-0">
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
