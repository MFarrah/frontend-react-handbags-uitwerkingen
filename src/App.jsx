import './App.css'
import Button from './components/Button'

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button text="to the collection" disabled={false}/>
              <Button text="shop all bags" disabled={false}/>
              <Button text="pre-orders" disabled={true}/>
          </nav>

      </>
  )
}

export default App
