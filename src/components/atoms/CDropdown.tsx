type Props = {
	options: string[];
	onSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	isDisabled?: boolean;
	selectedOption?: string;
};

const CDropdown = ({
	options,
	isDisabled,
	onSelectHandler,
	selectedOption,
}: Props) => {
	return (
		<select
			disabled={isDisabled && true}
			onChange={onSelectHandler}
			value={selectedOption}
			className="relative block outline-none border-2 border-gray-400 rounded-md h-fit py-2 text-base text-gray-400 focus:outline-none focus:shadow-outline px-1 pr-8 disabled:bg-gray-200"
			id="role"
		>
			{options.map((option, index) => {
				return (
					<option className="py-5" key={index} value={option}>
						{option.charAt(0).toUpperCase() + option.slice(1)}
					</option>
				);
			})}
		</select>
	);
};

export default CDropdown;
