// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import { SidebarProvider, useSidebar } from './Component/Navbar/SidebarContext';

// Pages
import Dashboard from "./Pages/Dashboard";
import Commission from "./Pages/Commission";
import Message from "./Pages/Messages";
import Report from "./Pages/Reports";
import Analytics from "./Pages/Analytics";

// Approvals
import CustomerApprovals from "./Pages/Approvals/CustomerApprovals";
import RetailerApprovals from "./Pages/Approvals/RetailerApprovals";

// Product Moderation
import AllProducts from "./Pages/Product Moderation/AllProducts";
import PendingApprovals from "./Pages/Product Moderation/PendingApprovals";

// User Management
import Customer from "./Pages/UserManagement/Customers";
import Retailer from "./Pages/UserManagement/Retailers";

function AppContent() {
  const { collapsed } = useSidebar();

  return (
    <div className="flex w-full">
      <Navbar />
      {/* Dynamic margin left based on collapse */}
      <main
        className={`transition-all duration-300 w-full min-h-screen bg-gray-50 ${
          collapsed ? "ml-20" : "ml-72"
        }`}
      >
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings/commission" element={<Commission />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/approvals/customer" element={<CustomerApprovals />} />
          <Route path="/approvals/retailers" element={<RetailerApprovals />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/pending" element={<PendingApprovals />} />
          <Route path="/users/customers" element={<Customer />} />
          <Route path="/users/retailers" element={<Retailer />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </Router>
  );
}

export default App;
