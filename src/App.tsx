import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from './constants/routes';
import CreateNearAccountPage from './screens/CreateNearAccountPage';

import Homepage from './screens/Homepage';
import Profile from './screens/profile';
import VerificationPage from './screens/VerificationPage';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'development' ? '' : '/nft-builder-flow-24hrs-Challenge'}>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
        <Route path={ROUTES.VERIFICATION} element={<VerificationPage />} />
        <Route path={ROUTES.CREATE_USING_NEAR} element={<CreateNearAccountPage />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.NOT_FOUND} element={<div>Page Not Found </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
