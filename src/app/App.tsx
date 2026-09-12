import { Home } from '../pages/Home/Home';
import { CorporateInformation } from '../pages/CorporateInformation/CorporateInformation';
import { SelectedExperience } from '../pages/SelectedExperience/SelectedExperience';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/design-system.css';
import '../styles/source-page.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pengalaman" element={<SelectedExperience />} />
        <Route path="/korporasi" element={<CorporateInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
