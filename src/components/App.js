import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";

import hogs from "../porkers_data";

function App() {
	const [selectCategory, setSelectCategory] = useState("All")
	const [selectSort, setSelectSort] = useState("None")

	function handleChange(event){
		const selectCategory = (event.target.value)
		setSelectCategory(selectCategory);
	}

	function handleSortChange(event){
		const selectSort = (event.target.value)
		setSelectSort(selectSort)
	}

	return (
		<div className="App">
			<Nav />
			<HogSort onSortChange={handleSortChange} selectSort={selectSort}/>
			<HogFilter onCategoryChange={handleChange} selectCategory={selectCategory}/>
			<HogList hogs={hogs} selectCategory={selectCategory} selectSort={selectSort}/>
		</div>
	);
}

export default App;
