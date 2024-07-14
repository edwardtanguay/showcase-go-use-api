import { ExampleDataFromCode } from "../components/ExampleDataFromCode";
import { ExampleDataFromMongo } from "../components/ExampleDataFromMongo";

export const PageWelcome = () => {
	return (
		<>
			<ExampleDataFromCode />
			<ExampleDataFromMongo/>
		</>
	);
};
