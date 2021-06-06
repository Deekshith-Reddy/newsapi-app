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
      const res = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=c61e4e9566a248f5971e6b5511a5d51f`)
      const {articles} = await res.json()
      //dconsole.log(articles)
      setNewsData(articles)
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
