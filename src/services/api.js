export async function filterIngredient(id) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function filterName(id) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function filterFirstLetter(id) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
