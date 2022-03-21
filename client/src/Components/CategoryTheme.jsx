import React from "react";

function CategoryTheme({ title, memes }) {
	return (
		<div>
			<h2>{title}</h2>
			{memes.map((i) => (
				<img src={i.src} />
			))}
		</div>
	);
}

export default CategoryTheme;
