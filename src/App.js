import { makeStyles } from "@material-ui/core/styles";

const mainStyles = makeStyles({
  main: {
    backgroundColor: "#01497c",
    height: "100vh",
    margin: "0px",
  },
  nav: {
    width: "100vw",
    position: "fixed",
    height: "8vh",
    backgroundColor: "#a9d6e5",
  },
});

export default function App() {
  const styles = mainStyles();

  return (
    <div className={styles.main}>
      <nav className={styles.nav}></nav>
    </div>
  );
}
