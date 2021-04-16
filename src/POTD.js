import React, { useState, useEffect } from "react";
import axios from "axios";

const POTD = () => {
	const [photoData, setPhotoData] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=6X75xS4lgMq4h3alGcjWoErtUev8qXGeDCJqga05"
			)
			.then((res) => {
				console.log(res.data);
				setPhotoData(res.data);
			})
			.catch((err) => {
				console.log("I AM SORRY, LORD MEGATRON", err);
			});
	}, []);

	return (
		<div className="container">
			<h2 className='title'>{photoData.title}</h2>
			<p className='date'>{photoData.date}</p>
			<img className='img' src={photoData.url} alt={photoData.title} />
			<p className="explanation">{photoData.explanation}</p>
			<p>{photoData.copyright}</p>
		</div>
	);
};

export default POTD;
