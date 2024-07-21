
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<SearchBar/>}></Route>
        
      </Routes> 
    </BrowserRouter> 
  );
}

export default App;
