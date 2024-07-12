export const backendUrl = (): string => {
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	return backendUrl;
};
