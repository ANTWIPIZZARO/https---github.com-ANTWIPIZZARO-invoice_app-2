import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvoiceDetails from "./components/InvoicesDetails";
import InvoicesForms from "./components/forms/InvoicesForms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<InvoiceDetails />} />
          <Route path="/invoice-form" element={<InvoicesForms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
