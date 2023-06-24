
import Home from './pages/Home'
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import Pay from './pages/Pay';
import Cart from './pages/Cart';

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
      },
      {
        path: "/register",
        element: <Register />
      }
      , {
        path: "/login",
        element: <Login />
      }, {
        path: "/pay",
        element: <Pay />
      },
      {
        path: "/cart",
        element: <Cart />
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
