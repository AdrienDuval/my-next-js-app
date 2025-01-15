"use client";

import { useEffect, useState } from "react";

const FetchProductsClientSide = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await res.json();
        setAlbums(data);
      } catch (e) {
        console.error("Error", e);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ul>
        {albums.map((album: { userId: number; id: number; title: string }) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchProductsClientSide;
