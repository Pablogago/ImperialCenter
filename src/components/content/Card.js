import React from 'react';
import './Card.scss';
import Alderaan from '../../assets/planetsImg/alderaan.jpg';
import Bespin from '../../assets/planetsImg/bespin.png';
import Coruscant from '../../assets/planetsImg/coruscant.png';
import Dagobah from '../../assets/planetsImg/Dagobah.jpg';
import Endor from '../../assets/planetsImg/endor.png';
import Hoth from '../../assets/planetsImg/hoth.png';
import Kamino from '../../assets/planetsImg/kamino.jpg';
import Naboo from '../../assets/planetsImg/naboo.png';
import Tatooine from '../../assets/planetsImg/tatooine.png';
import Yaviniv from '../../assets/planetsImg/yaviniv.png';

function Card({ item }) {

	const addImg = (img) => {
		switch (img) {
			case 'Alderaan':
				return Alderaan;
				break;
			case 'Bespin':
				return Bespin;
				break;
			case 'Coruscant':
				return Coruscant;
				break;
			case 'Dagobah':
				return Dagobah;
				break;
			case 'Endor':
				return Endor;
				break;
			case 'Hoth':
				return Hoth;
				break;
			case 'Kamino':
				return Kamino;
				break;
			case 'Naboo':
				return Naboo;
				break;
			case 'Tatooine':
				return Tatooine;
				break;
			case 'Yavin IV':
				return Yaviniv;
				break;
			default:
        return ''
				break;
		}
	};
	return (
		<div className="card__content">
			<img src={addImg(item.name)} alt={item.name}/>
			<div className="card__infoContent">
				<h5>{item.name}</h5>
				<ul>
					<li>{item.firstDate}</li>
					<li>{item.secondDate}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
