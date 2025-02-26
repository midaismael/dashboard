import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calendar from "./page/calendar/Calendar";
import FAQ from "./page/faq/FAQ";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/pieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/geography/Geography";
import NotFound from "./page/notFound/NotFound";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/f orm" element={<Form />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bar" element={<BarChart />} />
        <Route path="/pie" element={<PieChart />} />
        <Route path="/line" element={<LineChart />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
