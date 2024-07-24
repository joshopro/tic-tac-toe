import Game from "../components/Game";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
}
