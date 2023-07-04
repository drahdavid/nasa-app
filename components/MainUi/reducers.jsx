export const initialState = {
	isCheckboxOneChecked: false,
	isCheckboxTwoChecked: false,
};

export const reducer = (state, action) => {
	let { type = null } = action;

	const actions = {
		updateCheckboxOne: () => {
			return {
				...state,
				isCheckboxOneChecked: !state.isCheckboxOneChecked,
				isCheckboxTwoChecked: false,
			};
		},
		updateCheckboxTwo: () => {
			return {
				...state,
				isCheckboxTwoChecked: !state.isCheckboxTwoChecked,
				isCheckboxOneChecked: false,
			};
		},
		updateBothCheckbox: () => {
			return {
				...state,
				isCheckboxTwoChecked: false,
				isCheckboxOneChecked: false,
			};
		},
	};

	return actions[type]();
};
