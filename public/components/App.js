import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Documentation from './Documentation';
import NotFound from './NotFound';
import Recommendation from './Recommendation';
import Contribution from './Contribution';
import Example from './Example';
import Links from './Links';
import LiveDemo from './LiveDemo';
import Usage from './Usage';
import Installation from './Installation';
import GettingStarted from './GettingStarted';
import ProjectStructure from './ProjectStructure';
import ProjectGoals from './ProjectGoals';
import TechnologiesUsed from './TechnologiesUsed';
import UsageExamples from './UsageExamples';
import Acknowledgments from './Acknowledgments';
import Contributing from './Contributing';
import License from './License';
import ContactInformation from './ContactInformation';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/recommendation" component={Recommendation} />
        <Route path="/contribution" component={Contribution} />
        <Route path="/example" component={Example} />
        <Route path="/links" component={Links} />
        <Route path="/live-demo" component={LiveDemo} />
        <Route path="/usage" component={Usage} />
        <Route path="/installation" component={Installation} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/project-structure" component={ProjectStructure} />
        <Route path="/project-goals" component={ProjectGoals} />
        <Route path="/technologies-used" component={TechnologiesUsed} />
        <Route path="/usage-examples" component={UsageExamples} />
        <Route path="/acknowledgments" component={Acknowledgments} />
        <Route path="/contributing" component={Contributing} />
        <Route path="/license" component={License} />
        <Route path="/contact-information" component={ContactInformation} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
