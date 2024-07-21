
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from 'react-redux';
import appstore from './utils/appstore';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';
import Conceptofusememohook from './components/Conceptofusememohook';




const approuter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children : [
      {
        path:'/',
        element:<Maincontainer/>,
      },
      {
        path:'/watch',
        element:<Watchpage/>
      },
      {
        path:'/conceptofusememohook',
        element:<Conceptofusememohook/>,
      }
    ]
  },
])
function App() {
  return (
    <Provider store={appstore}>
   <div >
    <Head/>
   <RouterProvider router={approuter}>
    <Body/>

   </RouterProvider>
   
   </div>
   </Provider>
  );
}


export default App;


// head
// body 
// sidebar
//    menuitems
//  maincontainer
//    buttonlist
//    videocontainer
//    videocard


