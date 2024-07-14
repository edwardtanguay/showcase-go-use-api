import { useState, useEffect } from "react";
import { AreaExample } from "./AreaExample";
import * as config from "../config";

const languagesUrl = `${config.backendUrl()}/languages`;

export const ExampleDataFromCode = () => {
	const [languages, setLanguages] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(languagesUrl);
			const _languages: string[] = await response.json();
			setLanguages(_languages);
		})();
	}, []);

	return (
		<AreaExample title="Data from code">
			<p className="mb-2">
				These are {languages.length} languages being loaded from:{" "}
				<a target="_blank" className="underline" href={languagesUrl}>
					{languagesUrl}
				</a>
			</p>
			<ul className="list-disc ml-4">
				{languages.map((language, index) => {
					return <li key={index}>{language}</li>;
				})}
			</ul>
		</AreaExample>
	);
};
