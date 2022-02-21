import './App.css';
import Sidebar from './Components/Sidebar'
import MyBody from './Components/MyBody'
import { Search } from './Components/Search';
import MyButton from './Components/MyButton'
import MyTable from './Components/MyTable';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <div >
      <MyNavbar/>
       <Sidebar />  
      <MyBody />
      {/* <Search/> */}
      <MyButton/>
      <MyTable/>
    </div>
  );
}

export default App;
