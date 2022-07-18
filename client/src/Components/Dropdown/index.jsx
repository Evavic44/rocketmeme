import React, { useState } from "react";
import { MenuItems } from "../MenuItems";
import { DropDownContainer } from "./Dropdown.styled";

function Dropdown() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<DropDownContainer>
			<ul
				onClick={handleClick}
				className={click ? "dropdown-menu clicked" : "dropdown-menu"}
			>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a
								className={item.cName}
								href={item.path}
								onClick={() => setClick(false)}
								target={item.target}
							>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</DropDownContainer>
	);
}

export default Dropdown;
