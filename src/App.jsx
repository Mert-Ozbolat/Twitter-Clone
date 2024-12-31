import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './pages/feed'
import Login from './pages/login'
import Protected from './components/protected'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Protected />}>
          <Route path='/feed' element={<Feed />} />
          <Route path='/ayarlar' element={<h1>deneme</h1>} />
          <Route path='/mesajlar' element={<h1>deneme</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App