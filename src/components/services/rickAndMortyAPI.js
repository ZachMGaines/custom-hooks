/* eslint-disable max-len */
export const fetchCharacters = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const json = await res.json();
  const usable = json.results;

  return usable.map(({ id, name, image }) => ({
    id,
    name,
    image
  }));

};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
};
