import React from 'react';

function Cardlist(props){
	return (
		<>
			<div className="col-md-2 mt-4">
				<div className="card custClass">
					  <img className="card-img-top" src={props.imgPath} alt="Card image cap" />
					  	<div className="card-body">
					  		<h5 className="card-title">{props.title}</h5>					  		
					  	</div>
				</div>
			</div>
		</>
	)

}

export default Cardlist;