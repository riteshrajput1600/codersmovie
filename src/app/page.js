import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-0 m-0">
      <Hero />
      <Popular />
    </main>
  );
}
