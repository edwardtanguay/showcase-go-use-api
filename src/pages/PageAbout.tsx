import * as config from "../config";

export const PageAbout = () => {
	return (
		<>
			<p>
				This site is a demonstration of a Go Backend working with a
				React frontend.
			</p>
			<p>This site gets its information from the following URL:</p>
			<p>
				<a
					href={config.backendUrl()}
					className="underline"
					target="_blank"
				>
					{config.backendUrl()}
				</a>
			</p>
		</>
	);
};
