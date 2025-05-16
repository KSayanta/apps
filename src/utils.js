const url = import.meta.env.VITE_BACKEND_URL;

export async function getDatafromAPI(ingredients) {
  const endpoint = "/recipe";
  const jsonData = JSON.stringify({ ingredients });

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  };

  try {
    const { recipe } = await fetch(url + endpoint, opts).then(res =>
      res.json()
    );

    return recipe;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getMemefromAPI() {
  const endpoint = "/rand_meme";

  try {
    const meme = await fetch(url + endpoint).then(res => res.json());

    return meme;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getRandomWordfromAPI() {
  const endpoint = "/rand_word";

  try {
    const word = await fetch(url + endpoint).then(res => res.json());

    return word;
  } catch (error) {
    console.error(error.message);
  }
}

export function pingHost() {
  try {
    fetch(url);
  } catch (error) {
    console.error(error.message);
  }
}

export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
