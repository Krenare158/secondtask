import React from 'react';
import './App.css';
import TabComponent from './components/TabComponent';
import ToggleComponent from './components/ToggleComponent';
import AccordionItem from './components/AccordionItem';

const App = () => {
  return (
    <div className="App">
      <h1>Task 2: Tabs and Toggle</h1>
      <TabComponent />
      <ToggleComponent />
      <h1>Task 3: Accordion</h1>
      <AccordionItem 
        title="About Us" 
        content="4 articles in this Topic" 
        subitems={[
          { title: "How does Parkname separate itself from other domain name parking companies?", content: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio." },
          { title: "Is Parkname Parking actually free?", content: "Yes, Parkname Parking is completely free for domain owners." },
          { title: "What you do?", content: "Parkname provides domain parking services and monetization opportunities for domain owners." },
          { title: "When was Parkname first founded?", content: "Parkname was founded in 2010." },
        ]} 
      />
    </div>
  );
};

export default App;
