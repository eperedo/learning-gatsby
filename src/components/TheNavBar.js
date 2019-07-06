import React from 'react';
import { Link } from 'gatsby';

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/customers">Customers</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
