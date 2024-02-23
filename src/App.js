import "./Styles.css";
import Masorybycomp from "./components/Masorybycomp";
import Mlecnechlazenecomp from "./components/Mlecnechlazenecomp";
import Ovocezeleninacomp from "./components/Ovocezeleninacomp";
import Pekarnacukrarnacomp from "./components/Pekarnacukrarnacomp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Mňamka</h1>
          <h3>Nechce se ti na nákup? Nech to na nás.</h3>
          <div>
            Ovoce a zelenina Pekárna a cukrárna Mléčné a chlazené Maso a ryby
            Uzeniny a lahůdky Mražené Trvanlivé Nápoje
          </div>
          <div>Přihlášení / Odhlásit se / Zaregistrovat se</div>
        </header>
        <br />
        <section>
          <div>Ovoce a zelenina</div>
          <Ovocezeleninacomp />
          <div>Pekarna a cukrarna</div>
          <Pekarnacukrarnacomp />
          <div>Mlecne a chlazene</div>
          <Mlecnechlazenecomp />
          <div>Maso a ryby</div>
          <Masorybycomp />
        </section>
        <br />
        <br />
        <br />

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
