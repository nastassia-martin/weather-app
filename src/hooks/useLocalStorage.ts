import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorage = <T>(
	defaultValue: T,
	key: string
): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(() => {
		const localStorageValue = window.localStorage.getItem(key);

		return localStorageValue !== null
			? (JSON.parse(localStorageValue) as T)
			: defaultValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
