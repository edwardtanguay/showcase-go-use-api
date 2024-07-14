import { useEffect, useState } from "react";
import * as config from "../config";
import { Skill } from "../types";
import { Example, ExampleArea } from "../components/ExampleArea";

const languagesUrl = `${config.backendUrl()}/languages`;
const skillsUrl = `${config.backendUrl()}/skills`;

export const PageWelcome = () => {
	const [languages, setLanguages] = useState<string[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(languagesUrl);
			const _languages: string[] = await response.json();
			setLanguages(_languages);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await fetch(skillsUrl);
			const _skills: Skill[] = await response.json();
			setSkills(_skills);
		})();
	}, []);

	return (
		<>
			<ExampleArea title="Data from code">
				<p className="mb-2">
					These are {languages.length} languages being loaded from:{" "}
					<a
						target="_blank"
						className="underline"
						href={languagesUrl}
					>
						{languagesUrl}
					</a>
					.
				</p>
				<ul className="list-disc ml-4">
					{languages.map((language, index) => {
						return <li key={index}>{language}</li>;
					})}
				</ul>
			</ExampleArea>
			<div>
				<p></p>
			</div>
		</>
	);
};
