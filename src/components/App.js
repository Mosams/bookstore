import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Books from '../redux/books/Books';
import Categories from '../redux/categories/Categories';

function App() {
  const fonty = {
    fontSize: '2rem',
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="letty" style={fonty}>
              < Books />
            </div>
    )}
        />
        <Route
          path="/Categories"
          element={
            < Categories />
    }
        />
      </Routes>
    </>
  );
}

export default App;
