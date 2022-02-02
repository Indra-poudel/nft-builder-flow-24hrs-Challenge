import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './screens/Homepage';
import VerificationPage from './screens/VerificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/create-near-account" element={<div>Creat near account</div>} />
        <Route path="/profile" element={<div>User profile</div>} />
        <Route path="*" element={<div>Page Not Found </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
