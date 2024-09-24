import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Witaj!</h1>
      <p className="text-fd-muted-foreground">
        Witaj na stronie <code>help.nikostuff.com</code> <br/> {' '}
        <Link
          href="/docs/mc"
          className="text-fd-foreground font-semibold underline"
        >
          Klkinij tutaj aby przejść dalej
        </Link>{' '}
        {/* and see the documentation. */}
      </p>
    </main>
  );
}
