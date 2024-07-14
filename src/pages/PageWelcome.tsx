import { useEffect, useState } from "react";
import * as config from "../config";
import { Skill } from "../types";
import { ExampleDataFromCode } from "../components/ExampleDataFromCode";

const skillsUrl = `${config.backendUrl()}/skills`;

export const PageWelcome = () => {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(skillsUrl);
			const _skills: Skill[] = await response.json();
			setSkills(_skills);
		})();
	}, []);

	return (
		<>
			<ExampleDataFromCode />
		</>
	);
};
