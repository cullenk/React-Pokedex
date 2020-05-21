import React from 'react';

export default function MyComponent({ goToPrevPage, goToNextPage }) {
  return (
    <div className="buttons">
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}
