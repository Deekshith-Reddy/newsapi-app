import {useState, useEffect} from 'react'
import News from "./components/News";
import Header from './components/Header'
import SideContainer from './components/SideContainer'

function App() {

  const [newsData, setNewsData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('google')

  const popularQueries = ['Google', 'Tesla', 'China', 'Apple', 'India','United States', 'Germany']

  useEffect(()=> {

    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(`https://api.currentsapi.services/v1/search?keywords=${searchQuery}&language=en&apiKey=JGVX1_3HUNNqK1NUbxqcp0thpYm_CtJnUeqtsDTyYMUf7nah`)
      const {news} = await res.json()
      //dconsole.log(articles)
      setNewsData(news)
      setLoading(false)
    }

    fetchData()
    //console.log(newsData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery}/>
      <div className="page-body">
      {!Loading ? <SideContainer searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} popular = {popularQueries}/> : ""}
      
      {!Loading ? <News data = {newsData} query={searchQuery}/>: <h1>Loading</h1>}
      </div>
      
    </div>
  );
}

export default App;
