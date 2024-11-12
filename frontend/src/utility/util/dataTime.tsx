export const formatDatetimeYYYYMMDD = (datetimeString: string) => {
	const reDatetimeStr = datetimeString.split('T')[0]
	return reDatetimeStr.slice(0, 10)
}

export const formatDatetimeYYYYMM = (datetimeString: string) => {
	const reDatetimeStr = datetimeString.split('T')[0]
	return reDatetimeStr.slice(0, 7)
}