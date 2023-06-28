import Card from "./Components/Card"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <h1 className="pwTitle">Password Generator</h1>
      <main className="container">
        <Card />
        <ToastContainer position="top-right" limit={3} draggablePercent={30} />
      </main>
    </>
  )
}

export default App
