async function FetchProductsServerSide() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) throw new Error("failled to fetch data");
  const albums = await res.json();

  return (
    <div>
      <ul>
        {albums.map((album: { userId: number; id: number; title: string }) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchProductsServerSide;
