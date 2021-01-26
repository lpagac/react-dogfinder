import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/* 
* Renders the NavBar
*
* props:
* - dog names: An array like (["whiskey", "tubby", ...])
*
* state: none
*
* App -> Nav
*/

function Nav({ names }) {
	// Generates an url with dog name
	function generateUrl(name) {
		return `/dogs/${name}`;
	}

	return (
		<nav className="NavBar">
			<NavLink exact to="/dogs" >
      Dogs
      </NavLink>
			{names.map((name) => {
				return <NavLink exact key={name} to={generateUrl(name)}>
					{name}
				  </NavLink>
			})}
		</nav>
	);
}

export default Nav;
