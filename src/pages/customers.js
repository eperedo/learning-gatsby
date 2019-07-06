import React from 'react';
import NavBar from './../components/TheNavBar';

const data = [
	{
		id: 1,
		email: 'george.bluth@reqres.in',
		first_name: 'George',
		last_name: 'Bluth',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
	},
	{
		id: 2,
		email: 'janet.weaver@reqres.in',
		first_name: 'Janet',
		last_name: 'Weaver',
		avatar:
			'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
	},
	{
		id: 3,
		email: 'emma.wong@reqres.in',
		first_name: 'Emma',
		last_name: 'Wong',
		avatar:
			'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
	},
];

function Customers() {
	return (
		<section>
			<NavBar />
			{data.map((customer) => {
				return (
					<section key={customer.id}>
						<img src={customer.avatar} alt={customer.first_name} />
						<div>
							<h2>
								{customer.first_name} {customer.last_name}
							</h2>
							<p>{customer.email}</p>
						</div>
					</section>
				);
			})}
		</section>
	);
}

export default Customers;
