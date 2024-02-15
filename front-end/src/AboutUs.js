import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/about-us')
      .then(response => response.json())
      .then(setData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <img src={data.imageUrl} alt="About Us" />
    </div>
  );
};

export default AboutUs;
