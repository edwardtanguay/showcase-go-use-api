import { useState, useEffect } from "react";
import { AreaExample } from "./AreaExample";
import * as config from "../config";
import { Skill } from "../types";

const skillsUrl = `${config.backendUrl()}/skills`;
const numToShow = 10;

export const ExampleDataFromMongo = () => {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(skillsUrl);
			const _skills: Skill[] = await response.json();
			setSkills(_skills);
		})();
	}, []);

	return (
		<AreaExample title="Data via MongoDB">
			<p className="mb-2">
				These are {numToShow} of {skills.length} skills being loaded from:{" "}
				<a target="_blank" className="underline" href={skillsUrl}>
					{skillsUrl}
				</a>
			</p>
			<ul className="list-disc ml-4">
				{skills.filter((_, index) => index < numToShow).map((skill, index) => {
					return <li key={index}>{skill.Name}</li>;
				})}
			</ul>
		</AreaExample>
	);
};
