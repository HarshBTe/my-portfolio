
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import StaticWeb from './components/StaticWeb';
import DynamicWeb from './components/DynamicWeb';
import ReactWeb from './components/ReactWeb';
import ResponsiveWeb from './components/ResponsiveWeb';
import NotFound from './components/NotFound';
import TimelineView from './components/TimelineView';
import AIProjects from './components/AIProjects';

function App() {
  return (

     <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/static" element={<StaticWeb />} />
        <Route exact path="/my-portfolio/responsive" element={<ResponsiveWeb />} />
        <Route exact path="/my-portfolio/dynamic" element={<DynamicWeb />} />
        <Route exact path="/my-portfolio/react" element={<ReactWeb />} />
        <Route exact path="/my-portfolio/timelineview" element={<TimelineView />} />
        <Route exact path='/my-portfolio/ai' element={<AIProjects />} />
        <Route path ="*" element={<NotFound />} />
      </Routes>
   
   </BrowserRouter>

  );
}

export default App;
