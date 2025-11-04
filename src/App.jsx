import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import DefaultLayout from './components/layout/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
