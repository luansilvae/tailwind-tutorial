import Link from "./components/Link";
import { H1, H2 } from "./components/Typography";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-2">
      <H1>
        O melhor
        <br />
        <span className="text-purple-700 uppercase">açai</span>
        <br />
        do Brasil
      </H1>

      <H2>
        Está chegando na sua cidade
      </H2>

      <Link href="#">Seja notificado &#8594;</Link>
    </div>
  );
}

export default App;
