const btn = document.querySelector(".btn");
const joke_text = document.querySelector(".joke-text");

btn.addEventListener("click", (event) => {
  generateJoke();
});

const apiKey = "Sup66AHV5EHBhiKV2Xp4UQ==y1RXaSR9KlUw6b5H";
const apimethodHead = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

generateJoke();

async function generateJoke() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    joke_text.innerText = "Updating...";
    const apiRespone = await fetch(
      "https://api.api-ninjas.com/v1/jokes?limit=",
      apimethodHead
    );
    const responeText = await apiRespone.json();
    btn.disabled = false;
    btn.innerText = "tell me a joke";
    joke_text.innerText = responeText[0].joke;
  } catch (error) {
    btn.innerText = "Error Happend";
    btn.disabled = false;
    joke_text.innerHTML =
      "An Unknown Error Happend. Check Your Internet Connection And Try Again Later!";
  }
}
