import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Read from "./components/Read";

function App() {

  const AppRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>,
    },
    {
      path : "/update",
      element : <Update/>
    },
    {
      path : "/delete",
      element : <Delete/>
    }
    ,
    {
      path : "/read",
      element : <Read/>
    }
  
    
  ])
  return (
    <div className="App">
        <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default App;
