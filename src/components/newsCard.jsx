import React from 'react';

function NewsCard({ title, description, src, url }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm" style={{ maxWidth: "345px" }}>
      <figure className="px-10 pt-10">
        <img
          src={src || "https://picsum.photos/300/200"}
          alt="News"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title || "No Title Available"}</h2>
        <p>{description || "No description available."}</p>
        <div className="card-actions">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">View More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
