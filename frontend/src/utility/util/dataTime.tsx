export const formatDatetimeYYYYMMDD = (datetimeString: string) => {
	const reDatetimeStr = datetimeString.split('T')[0]
  
	const date = new Date(reDatetimeStr)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1)
	const day = String(date.getDate())

	return `${year}-${month}-${day}`
}