import React from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
	return (
		<div className="input-wrapper">
			<button className="icon">
				<FaSearch className="text-mypurple w-[18px] h-[18px]" />
			</button>
			<input
				placeholder="..."
				className="input"
				name="text"
				type="text"
			/>
		</div>
	);
};

export default Search;