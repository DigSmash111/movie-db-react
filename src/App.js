import React, { useState } from 'react';
import axios from 'axios';

import { Search, Results, Popup } from './components';

const App = () => {
	const [state, setState] = useState({
		s: '',
		results: [],
		selected: {}
	});

	const apiurl = 'https://www.omdbapi.com/?apikey=65ff28fa';

	const handleInput = e => {
		let s = e.target.value;

		setState(prevState => {
			return 	{
				...prevState,
				s: s
			}
		});		
	}

	const search = e => {
		if(e.key === "Enter") {
			axios(`${apiurl}&s=${state.s}`).then( ({data}) => {
				console.log(data);
				let result = data.Search;

				setState(prevState => {
					return {
						...prevState,
						results: result
					};
				});
			});
		}
	}

	const openPopup = id => {
		axios(`${apiurl}&i=${id}`).then( ({ data }) => {
			let result = data;

			setState(prevState => {
				return {
					...prevState,
					selected: result
				};
			});
		} )
	}

	const closePopup = () => {
		setState(prevState => {
			return {
				...prevState,
				selected: {}
			};
		});
	}

	return (
		<div className="App">
			<header>
				<h1>Movie Database</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />
				<Results results={state.results} openPopup={openPopup} />
				{ ( typeof state.selected.Title != 'undefined' ) ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
			</main>
		</div>
	);
}

export default App;