import { useEffect } from "react";

import { useRouter } from "next/navigation";

export const CheckBoxLink = ({ label, dispatch, reducerState, type }) => {
	const router = useRouter();

	useEffect(() => {
		router.replace(
			reducerState.isCheckboxOneChecked && !reducerState.isCheckboxTwoChecked
				? `?earth_date=2020-09-22`
				: !reducerState.isCheckboxOneChecked &&
				  reducerState.isCheckboxTwoChecked
				? `?sol=2890`
				: "?"
		);
		router.refresh();
	}, [reducerState]);

	useEffect(() => {
		return () => {
			dispatch({ type: "updateBothCheckbox" });
		};
	}, []);

	return (
		<label className="flex items-center">
			<input
				type="checkbox"
				className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
				checked={
					type === "updateCheckboxOne"
						? reducerState.isCheckboxOneChecked
						: reducerState.isCheckboxTwoChecked
				}
				onChange={() => {
					dispatch({
						type,
					});
				}}
			/>
			<span className="ml-2 text-gray-700">{label}</span>
		</label>
	);
};
