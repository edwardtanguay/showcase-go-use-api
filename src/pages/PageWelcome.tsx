import { useEffect, useState } from "react";
import * as config from "../config";
import { Skill } from "../types";

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
			<div>
				<p>
					There are there {languages.length} languages, loaded from
					data as code:{" "}
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
			</div>
		</>
	);
};
