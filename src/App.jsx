import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./Body"

function App() {


  return (
    <>
  <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/" element={<div>base</div>}/>
    <Route path="/login" element={<div>Login</div>}/>
    <Route path="/Profile" element={<div>Profile</div>}/>
    
    </Route>
  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
