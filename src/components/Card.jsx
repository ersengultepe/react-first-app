import React from 'react';

function Card() {
  return (
    <>
      <div class="card">
        <img
          src="https://picsum.photos/id/237/150/100"
          class="card-img-top w-100"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
