async function getResponse() {
	const response = await fetch(
		"https://api.reviewsmaker.com/gmb/?placeid=ChIJOe9avEcs3EcRyAoHK6-Eq8U"
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    console.log(data);
}
// getResponse();
