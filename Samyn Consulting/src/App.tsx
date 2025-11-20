import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PurposeValues } from './components/PurposeValues';
import { WorkstreamsTable } from './components/WorkstreamsTable';
import { Packages } from './components/Packages';
import { FractionalLeadership } from './components/FractionalLeadership';
import { ExecutionServices } from './components/ExecutionServices';
import { PartnerNetwork } from './components/PartnerNetwork';
import { Process } from './components/Process';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <About />
      <PurposeValues />
      <WorkstreamsTable />
      <Packages />
      <FractionalLeadership />
      <ExecutionServices />
      <PartnerNetwork />
      <Process />
      <ContactFooter />
    </div>
  );
}