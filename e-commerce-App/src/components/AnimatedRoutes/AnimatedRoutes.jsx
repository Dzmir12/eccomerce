import { Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Product from "../../Pages/Product/Product";
import Products from "../../Pages/Products/Products";
import CartPage from "../../Pages/CartPage/CartPage";
import Authentication from "../../Pages/Authentication/Authentication";





function AnimatedRoutes() {
 
 
  return (

    
      <Routes>
        <Route index element={<Home  />} path="/" />
        <Route index element={<Products />} path="/products/:id" />
        <Route index element={<Product />} path="/products/:id/product/:id" />
        <Route index element={<CartPage />} path="/products/:id/CartPage" />
        <Route index element={<Authentication />} path="/Authentication" />
      </Routes>
      
  
  );
}

export default AnimatedRoutes;
