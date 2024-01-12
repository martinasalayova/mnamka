import "./App.css";
import Masorybycomp from "./components/Masorybycomp";
import Mlecnechlazenecomp from "./components/Mlecnechlazenecomp";
import Mrazenecomp from "./components/Mrazenecomp";
import Napojecomp from "./components/Napojecomp";
import Ovocezeleninacomp from "./components/Ovocezeleninacomp";
import Pekarnacukrarnacomp from "./components/Pekarnacukrarnacomp";
import Trvanlivecomp from "./components/Trvanlivecomp";
import Uzeninylahudkycomp from "./components/Uzeninylahudkycomp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Mňamka</h1>
          <h3>Nechce se ti na nákup? Nech to na nás.</h3>
          <div>
            Ovoce a zelenina Pekárna a cukrárna Mléčné a chlazené
            <a title="Maso a ryby" href="/Masorybypage.jsx">
              Maso a ryby
            </a>
            Uzeniny a lahůdky Mražené Trvanlivé Nápoje
          </div>
          <div>Přihlášení / Odhlásit se / Zaregistrovat se</div>
        </header>
        <section>
          <div>Tady bude carousel s ovocem a zeleninou</div>
          <Ovocezeleninacomp />
          <div>Tady bude carousel s pekarnou</div>
          <Pekarnacukrarnacomp />
          <div>Tady bude carousel s mlecne a chlazene</div>
          <Mlecnechlazenecomp />
          <div>Tady bude carousel s maso ryby</div>
          <Masorybycomp />
          <div>Tady bude carousel s uzeniny a lahudky</div>
          <Uzeninylahudkycomp />
          <div>Tady bude carousel s mrazene</div>
          <Mrazenecomp />
          <div>Tady bude carousel s trvanlive</div>
          <Trvanlivecomp />
          <div>Tady bude carousel s napoje</div>
          <Napojecomp />
        </section>
        <footer>
          <div>O nás</div>
          <div>Kontaktujte nás: mnam@mnamka.cz</div>
          <div>Sledujte nás: Instagram X Facebook</div>
          <div>Coded by Martina Salayova</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
