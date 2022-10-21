import './App.css';
import { useEffect, useState } from 'react'
import PaginationComponent from './components/PaginationComponents';
import PaginationSelector from './components/PaginationSelector';

const fetchData = async (url) => {
  const result = await fetch(url)
  return result.json()
}

function App() {
  const [itens, setItens] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itensPerPage, setItensPerPage] = useState(10)
  const totalPages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = itens.slice(startIndex, endIndex)


  useEffect(() => {
    (async () => {
      const response = await fetchData('https://jsonplaceholder.typicode.com/todos')
      setItens(response)
    })()

    // old code
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //  .then(r => r.json())
    //  .then(setItens)
    // const fetchData = async () => {
    //   // setItens(result)
    // }
    // fetchData()
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])
  return (
    <div className="App">
      
      <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />

      <PaginationComponent totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentItens.map(i => {
        return (
          <div className='item'>
            <span>{i.id}</span>
            <span>{i.title}</span>
            <span>{i.completed}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
