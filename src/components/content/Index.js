import React, { useEffect, useState } from 'react';
import './index.scss';
import Card from './Card';
import Header from './Header';
import Pagination from './Pagination';

function Content({ menuSelected }) {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ totalPages, setTotalPages ] = useState(0);
	const [ selectValue, setSelectValue ] = useState('desc');
	const [ dataShown, setdataShown ] = useState([]);

	const calculePages = (value) => {
		const pages = value.count / value.results.length;
		setTotalPages(pages);
	};
	const sortPage = (data, select) => {
		if (select === 'asc') {
			const allDataName = data.map((item) => item);
			const resp = allDataName.sort(function(a, b) {
				var nameA = a.name.toLowerCase(),
					nameB = b.name.toLowerCase();
				if (
					nameA < nameB //sort string ascending
				)
					return -1;
				if (nameA > nameB) return 1;
				return 0; //default return value (no sorting)
			});
			setdataShown(resp);
			setLoading(false);
		} else {
			const allDataName = data.map((item) => item);
			const resp = allDataName.sort(function(a, b) {
				var nameA = a.name.toLowerCase(),
					nameB = b.name.toLowerCase();
				if (
					nameB < nameA //sort string ascending
				)
					return -1;
				if (nameA > nameB) return 1;
				return 0; //default return value (no sorting)
			});
			setdataShown(resp);
			setLoading(false);
		}
	};

	const fetchData = async () => {
		try {
			const url = `https://swapi.dev/api/${menuSelected.name}/`;
			const resp = await fetch(url);
			const respJson = await resp.json();

			setData(respJson);
			showDate(respJson);
			calculePages(respJson);
		} catch (e) {
			console.error(e);
		}
	};
	const showDate = (value) => {
		const data = [];
		switch (menuSelected.name) {
			case 'people':
				value.results.map((item) =>
					data.push({
						name: item.name,
						firstDate: `gender: ${item.gender}`,
						secondDate: `eye_color: ${item.eye_color}`
					})
				);
				break;
			case 'starships':
				value.results.map((item) =>
					data.push({
						name: item.name,
						firstDate: `crew: ${item.crew}`,
						secondDate: `cargo_capacity: ${item.cargo_capacity}`
					})
				);
				break;
			case 'vehicles':
				value.results.map((item) =>
					data.push({ name: item.name, firstDate: `crew: ${item.crew}`, secondDate: `model: ${item.model}` })
				);
				break;
			case 'planets':
				value.results.map((item) =>
					data.push({
						name: item.name,
						firstDate: `Population: ${item.population}`,
						secondDate: `Terrain: ${item.terrain}`
					})
				);
				break;
		}

		setdataShown(data);
		sortPage(data);
	};
	useEffect(
		() => {
			fetchData();
		},
		[ menuSelected ]
	);

	return (
		<div className="content">
			<Header
				data={data}
				setData={setData}
				setSelectValue={setSelectValue}
				selectValue={selectValue}
				sortPage={sortPage}
				menuSelected={menuSelected}
				dataShown={dataShown}
			/>
			{loading ? (
				<div>loading...</div>
			) : (
				<div className="content__allCards">{dataShown.map((item, id) => <Card key={id} item={item} />)}</div>
			)}
			<Pagination
				data={data}
				menuSelected={menuSelected}
				totalPages={totalPages}
				setData={setData}
				setLoading={setLoading}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
}

export default Content;
