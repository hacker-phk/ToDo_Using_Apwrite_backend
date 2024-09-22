
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Notes from "./pages/Notes.jsx"
import LoginRegister from "./pages/LoginRegister.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/login" element={<LoginRegister />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
