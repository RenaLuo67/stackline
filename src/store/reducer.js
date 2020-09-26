import {INIT_LIST_ACTION} from './actionTypes.js';

const defaultState = {
	image: '',
	title: '',
	subtitle: '',
	tags: [],
	sales:[]
};

export default (state = defaultState, action) => {	
	if (action.type === INIT_LIST_ACTION) {
		const newState = JSON.parse(JSON.stringify(state));
		const data = action.value;
		newState.image = data.image;
		newState.title = data.title;
		newState.subtitle = data.subtitle;
		newState.tags = data.tags;
		newState.sales = data.sales;
		return newState;
	}
	return state;
};
