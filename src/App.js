
import Home from './pages/Home'
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/all",
        element: <ProductList />
      },
      {
        path: "/product",
        element: <Product />
      }

    ]
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
