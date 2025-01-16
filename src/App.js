import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app bg-gray-100 min-h-screen">
      <Header />
      <main className="flex flex-col items-center">
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;