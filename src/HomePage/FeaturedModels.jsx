import React from 'react';


const FeaturedModels = () => {
  const models = [
    { name: 'Ayesha Khan', city: 'Mumbai', imgUrl: 'url-to-image1' },
    { name: 'Rohan Sharma', city: 'Delhi', imgUrl: 'url-to-image2' },
    // Add more models
  ];

  return (
    <section className="featured-models">
      <h2>Featured Models & Actors</h2>
      <div className="model-grid">
        {models.map((model, index) => (
          <div key={index} className="model-card">
            <img src={model.imgUrl} alt={model.name} />
            <h3>{model.name}</h3>
            <p>{model.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
