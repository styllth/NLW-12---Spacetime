import { Button } from "ui";

export default function Home() {
  return (
    <div className="h-screen bg-zinc-950 p-6 text-zinc-50 flex justify-center flex-col gap-2 items-center">
      <h1 className="text-4xl font-bold text-center">Sua cápsula do tempo</h1>
      <Button>Entrar</Button>
    </div>
  );
}
