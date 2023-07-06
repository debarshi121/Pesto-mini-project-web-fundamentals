const generateQuotes = async (category) => {
	const URL = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=6`;
	const apiKey = "f1ORreJfh0vN6PwU3Z/Z9A==ANRNhsauUzT4zyXw";

	const requestOptions = {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(URL, requestOptions);
		const data = await response.json();

		let quotesDivs = "";

		data.forEach((quote) => {
			const div = `
				<div class="quote-card">
					<p>${quote.quote}</p>
					<cite>- ${quote.author}</cite>
				</div>
			`;
			quotesDivs += div;
		});

		document.getElementById("section-output").innerHTML = quotesDivs;
	} catch (error) {
		console.error(error);
	}
};

document.getElementById("btn").addEventListener("click", () => {
	const keyword = document.getElementById("input-keyword").value;
	if (keyword.trim() !== "") {
		generateQuotes(keyword);
	}
});
