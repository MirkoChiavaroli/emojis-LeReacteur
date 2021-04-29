import "./App.css";

/* Import Components */
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

/* Import .json */
import emojis from "./emojis.json";

function App() {
  return (
    <div>
      <Search />
      <div>
        {emojis.map((elem, index) => {
          return (
            <Line
              className="line"
              key={index}
              symbol={elem.symbol}
              title={elem.title}
              text="Click to copy!"
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
