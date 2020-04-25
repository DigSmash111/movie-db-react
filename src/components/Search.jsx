import React from 'react';

const Search = ({ handleInput, search }) => {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				className="searchbox" 
				placeholder="Search for a movie..." 
				onChange={handleInput} 
				onKeyPress={search}
			/>	{/* onKeyPress executes when the enter key is pressed */}
		</section>
	);
}

export default Search;