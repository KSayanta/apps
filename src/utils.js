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

export function pingHost() {
  try {
    fetch(url);
  } catch (error) {
    console.error(error.message);
  }
}

export const languages = [
  {
    name: "HTML",
    backgroundColor: "#E2680F",
    color: "#F9F4DA",
  },
  {
    name: "CSS",
    backgroundColor: "#328AF1",
    color: "#F9F4DA",
  },
  {
    name: "JavaScript",
    backgroundColor: "#F4EB13",
    color: "#1E1E1E",
  },
  {
    name: "React",
    backgroundColor: "#2ED3E9",
    color: "#1E1E1E",
  },
  {
    name: "TypeScript",
    backgroundColor: "#298EC6",
    color: "#F9F4DA",
  },
  {
    name: "Node.js",
    backgroundColor: "#599137",
    color: "#F9F4DA",
  },
  {
    name: "Python",
    backgroundColor: "#FFD742",
    color: "#1E1E1E",
  },
  {
    name: "Ruby",
    backgroundColor: "#D02B2B",
    color: "#F9F4DA",
  },
  {
    name: "Assembly",
    backgroundColor: "#2D519F",
    color: "#F9F4DA",
  },
];
