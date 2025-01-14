import Hello from "@/app/components/Hello";

export default function Home() {
  console.log("what i am doiing? ");
  return (
    <>
      <h1 className="text-4xl">Welcome to next.js</h1>
      <Hello />
    </>
  );
}
