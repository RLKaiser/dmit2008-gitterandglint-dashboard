import { Route, Routes } from 'react-router-dom';
import { AddProductPanel, AllProductsPanel, EditProductPanel } from 'components/panels';
import { DashBoard, PageNotFound, Login } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="dashboard" element={<DashBoard/>}>
          <Route index element={<AllProductsPanel/>}/>
          <Route path="add" element={<AddProductPanel/>}/>
          <Route path="edit" element={<EditProductPanel/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
