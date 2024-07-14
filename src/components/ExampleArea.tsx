interface IProps {
	title: string;
	children: React.ReactNode;
}
export const ExampleArea = ({ title, children }: IProps) => {
	return (
		<div className="mb-3 w-full md:w-[40rem]">
			<div className="bg-slate-700 text-slate-100 px-4 py-3 rounded-t">
				<p>{title}</p>
			</div>
			<div className="bg-slate-600 text-slate-100 px-4 py-3 rounded-b mb-3 font-mono text-xs">
				{children}
			</div>
		</div>
	);
};
