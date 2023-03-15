type FormatOption = {
	weekday: "long" | "short";
	year: "numeric" | "alphabetic";
	month: "long" | "short";
	day: "numeric" | "alphabetic";
};

const defaultOptions: FormatOption = {
	day: "numeric",
	month: "long",
	weekday: "long",
	year: "numeric",
};

export function formatDate(date: Date, countryCode: string): string {
	date.toLocaleDateString(countryCode, { day: "numeric" });
	return "";
}
