import { Footer, Header } from "./components";
import { Allroutes } from "./routes/Allroutes";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
