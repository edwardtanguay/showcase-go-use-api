import { useEffect, useState } from "react";
import * as config from '../config';

export const PageWelcome = () => {
	const [languages, setLanguages] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(config.backendUrl());
			const _languages: string[] = await response.json();
			setLanguages(_languages);
		})();
	}, []);

	return (
		<>
			<p>There are there {languages.length} languages.</p>
		</>
	);
};
