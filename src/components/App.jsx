import Teachers from "./Teachers/Teachers";
import teachers from "../data/teachers.json";
import Header from "./Home/Header";
import "../index.scss";

export const App = () => {
  return (
    <div
      className="app-components"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Header />
      <Teachers teachers={teachers} />
    </div>
  );
};
