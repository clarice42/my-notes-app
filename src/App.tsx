import "./App.css";
import { NotesGrid } from "./components/NotesGrid/NotesGrid";

function App() {
  return (
    <div className="root-div">
      <h1 className="header">Notas</h1>
      <NotesGrid />
    </div>
  );
}

export default App;
