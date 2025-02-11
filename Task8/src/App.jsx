import './App.css'
import Person from './components/Person'
import Product from './components/Product '

function App() {
  return (
    <>
    <Person name={'yash'} age={20}/>
    <Product product={{name:"hair oil" ,price:500}}/>
    </>
  )
}

export default App
