import './App.css';
import {products} from "./data/productsList.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";

function App() {

  return (
    <>
        {
            products.map((product, index) => <MyProduct key={index} product={product}/>)
        //     we need add 'key' prop when iterating array to improve performance for cases where some array members
        //     may be deleted and React will rerender only elements that were deleted instead of all array
        //     WE NEED FILL 'KEY' WITH DEFAULT INDEX FROM MAP, IF WE DON`T HAVE SPECIFIC ID`S FROM ARRAY ITSELF
        }
    </>
  )
}

export default App;
