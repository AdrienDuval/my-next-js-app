import React from "react";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl">Detail pages: {id}</h1>
    </div>
  );
}

export default page;
