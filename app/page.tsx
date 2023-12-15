import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="scroll-m-20 mt-10 text-4xl font-extrabold tracking-tighter lg:text-5xl">
        The Joke Tax Chronicles
      </h1>
      <p className="leading-6 [&:not(:first-child)]:mt-5 mb-4">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <ThemeToggle />
    </main>
  );
}
