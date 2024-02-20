import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBlog from './pages/SingleBlog';
import Home from './pages/admin/Home';
import Dashboard from './pages/admin/Dashboard';
import Create from './pages/admin/Create';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([])
  const fetchBlog = async () => {
    const res = await axios.get("http://localhost:4000/")
    setData(res.data)
  }
  useEffect(() => {
    fetchBlog()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 style={{ margin: "10px auto", textAlign: "center" }}>
                Blogs
              </h1>
              <Link className='dashLink' style={{ textDecoration: "none" }} to="/dashboard">
                Dashboard
              </Link>
              <hr />
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                padding: '20px'
              }}>
                {data.map((row) => {
                  return (<>
                    <Card key={row.id} row={row} />
                  </>
                  )
                })}
              </div>
            </>
          }
        />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path="/Dashboard/" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;