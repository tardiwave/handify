import { useState } from "react";
import styles from "./App.module.scss";
import Hint from "./layouts/Hint/Hint.layout";
import Home from "./layouts/Home/Home.layout";
import Main from "./layouts/Main/Main.layout";

const App: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [hintOpened, setHintOpened] = useState<boolean>(false);

  return (
    <div className={styles.App}>
      <header>
        <img className={styles.logo} src="/images/handify.png" alt="logo" />
      </header>
      <Home setStarted={setStarted} />
      <Hint hintOpened={hintOpened} setHintOpened={setHintOpened} />
      <Main started={started} setHintOpened={setHintOpened} />
    </div>
  );
};

export default App;
