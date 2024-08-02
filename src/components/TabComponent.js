import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabComponent.css';

const TabComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Dedicated Servers</Tab>
        <Tab>Virtual Cloud Servers</Tab>
        <Tab>WordPress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Servers</Tab>
        <Tab>Free Hosting</Tab>
      </TabList>

      <TabPanel>
        <div className="cards">
          <Card domain=".COM" price="$5.99/yr" oldPrice="instead of $10.99/yr" />
          <Card domain=".AI" price="$55.99/yr" oldPrice="instead of $9.99/yr" />
          <Card domain=".NET" price="$7.99/yr" oldPrice="instead of $9.99/yr" />
          <Card domain=".HEALTH" price="$7.99/yr" oldPrice="instead of $9.99/yr" />
          <Card domain=".CO.UK" price="$3.99/yr" oldPrice="instead of $9.99/yr" />
          <Card domain=".ORG" price="$15.99/yr" oldPrice="instead of $9.99/yr" />
          <Card domain=".CO" price="$26.33/yr" oldPrice="instead of $9.99/yr"/>
          <Card domain=".SEA" price="$26.33/yr" oldPrice="instead of $9.99/yr"/>
        </div>
      </TabPanel>
      {/* Repeat TabPanel for other tabs */}
    </Tabs>
  );
};

const Card = ({ domain, price, oldPrice }) => (
  <div className="card">
    <h3>{domain}</h3>
    <p>{price}</p>
    {oldPrice && <p>{oldPrice}</p>}
    <button>Buy Now</button>
  </div>
);

export default TabComponent;
