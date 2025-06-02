import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import PublicationsPageOne from './publications/pages/one';
import PublicationsPageTwo from './publications/pages/two';
import PublicationsPageThree from './publications/pages/three';
import PublicationPageFour from './publications/pages/four';
import PublicationPageFive from './publications/pages/five';
import PublicationPageSix from './publications/pages/six';
import PublicationPageSeven from './publications/pages/seven';
import PublicationPageEight from './publications/pages/eight';
import Publication from './Publication';
import PapersPageOne from './papers/pages/one';
import PapersPageTwo from './papers/pages/two';
import PapersPageThree from './papers/pages/three';
import PapersPageFour from './papers/pages/four';
import PapersPageFive from './papers/pages/five';
import PapersPageSix from './papers/pages/six';
import PapersPageSeven from './papers/pages/seven';
import PapersPageEight from './papers/pages/eight';
import Paper from './Paper';
import Requirements from './Requirements';
import Faq from './Faq';
import Contacts from './Contacts';
import Register from './Register';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publications" element={<PublicationsPageOne />} />
        <Route path="/publications/1" element={<PublicationsPageOne />} />
        <Route path="/publications/2" element={<PublicationsPageTwo />} />
        <Route path="/publications/3" element={<PublicationsPageThree />} />
        <Route path="/publications/4" element={<PublicationPageFour />} />
        <Route path="/publications/5" element={<PublicationPageFive />} />
        <Route path="/publications/6" element={<PublicationPageSix />} />
        <Route path="/publications/7" element={<PublicationPageSeven />} />
        <Route path="/publications/8" element={<PublicationPageEight />} />
        <Route path='/publication' element={<Publication />}/>
        <Route path="/papers" element={<PapersPageOne />} />
        <Route path="/papers/1" element={<PapersPageOne />} />
        <Route path="/papers/2" element={<PapersPageTwo />} />
        <Route path="/papers/3" element={<PapersPageThree />} />
        <Route path="/papers/4" element={<PapersPageFour />} />
        <Route path="/papers/5" element={<PapersPageFive />} />
        <Route path="/papers/6" element={<PapersPageSix />} />
        <Route path="/papers/7" element={<PapersPageSeven />} />
        <Route path="/papers/8" element={<PapersPageEight />} />
        <Route path="/paper" element={<Paper />}/>
        <Route path="/requirements" element={<Requirements/>} />
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/sign-in' element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;