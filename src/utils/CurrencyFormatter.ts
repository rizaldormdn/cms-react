export function formatCurrency(
	amount: number,
	countryCode: string
): number | bigint | string {
	const formatter = new Intl.NumberFormat(countryCode, {
		style: "currency",
		currency: getCurrencyCode(countryCode),
	});

	return formatter.format(amount);
}

export function getCurrencyCode(countryCode: string) {
	switch (countryCode) {
		case "US":
			return "USD";
		case "GB":
			return "GBP";
		case "JP":
			return "JPY";
		case "DE":
			return "EUR";
		default:
			return "USD";
	}
}
