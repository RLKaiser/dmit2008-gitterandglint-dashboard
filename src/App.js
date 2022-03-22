import { Route, Routes } from 'react-router-dom';
import { DashBoard, PageNotFound, Login } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="dashboard" element={<DashBoard/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
