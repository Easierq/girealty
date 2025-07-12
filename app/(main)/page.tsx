import Collections from "./_components/collections";
import Featured from "./_components/featured";
import { Hero } from "./_components/hero";
import Latest from "./_components/latest";

export default function MainPage() {
  return (
    <>
      <Hero />
      <Latest />
      <Featured />
      <Collections />
    </>
  );
}
