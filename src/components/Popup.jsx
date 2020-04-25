import React from 'react';

const Popup = ({ selected, closePopup }) => {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>{ selected.Year }</span></h2>
				<div className="rating">Rating: { selected.imdbRating }</div>
				<div className="plot">
					<img src={ selected.Poster } alt="Poster"/>
					<p>{ selected.Plot }</p>
				</div>
				<button className="close" onClick={ closePopup }>Close</button>
			</div>
		</section>
	);
}

export default Popup;