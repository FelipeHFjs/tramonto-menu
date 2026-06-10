export type Season = "spring" | "summer" | "autumn" | "winter";

export function getSeasonFromMonth(month: number): Season {
	if (month >= 2 && month <= 4) {
		return "spring";
	}

	if (month >= 5 && month <= 7) {
		return "summer";
	}

	if (month >= 8 && month <= 10) {
		return "autumn";
	}

	return "winter";
}
