import React from 'react';

const Result = ({ result, openPopup }) => {
	return (
		<section className="result" onClick={ () => openPopup(result.imdbID) }>
            <img src={ result.Poster } alt="Poster"/>
            <h3>{result.Title}</h3>
		</section>
	);
}

export default Result;