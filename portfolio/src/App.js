import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
