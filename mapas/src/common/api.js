const c = async function getLocations() {
  const api = await fetch(`http://127.0.0.1:3000/user`);
  const coordenadas = await api.json();
  return coordenadas;
};

export default { c };
