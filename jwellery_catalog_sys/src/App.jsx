// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Dashboard from '@/pages/Dashboard';
import Categories from '@/pages/Categories';
import Products from '@/pages/Products';
import Clients from '@/pages/Clients';
import Inquiries from '@/pages/Inquiries';
import Users from '@/pages/Users';
import Catalogs from '@/pages/Catalogs';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/inquiries" element={<Inquiries />} />
        <Route path="/users" element={<Users />} />
        <Route path="/catalogs" element={<Catalogs />} />
      </Routes>
    </Layout>
  );
}

export default App;
