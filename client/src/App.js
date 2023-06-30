
import Home from './pages/Home'
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Pay from './pages/Pay';
import Cart from './pages/Cart';


function App() {
  const user = true;
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:category",
        element: <ProductList />
      }, {
        path: "/products/",
        element: <ProductList />
      },
      {
        path: "/product/:productId",
        element: <Product />
      },
      {
        path: "/register",
        element: user ? <Navigate to="/" /> : <Register />
      }
      , {
        path: "/login",
        element: user ? <Navigate to="/" /> : <Login />
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
