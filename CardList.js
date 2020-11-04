import React from 'react';
import Card from './Card';


const CardList = ({Robots}) => {
 return (
    <div>
    {

   Robots.map((robot) => 
	(
		<Card 
		key={robot.id}
		id={robot.id} 
		name={robot.name} 
		email={robot.email}
		/>
		)
)
}
    </div>
		);
}

export default CardList; 