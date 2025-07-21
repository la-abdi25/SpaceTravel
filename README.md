# Space Travel App

<h2>Description</h2>
<p>A Space Travel app designed to simulate interplanetary fleet management. Built with modern React technologies, this application empowers users to explore spacecraft, build new ones, manage planetary logistics, and simulate dispatching missions — all within a sleek, interactive interface. Designed with reusability, stateful logic, and smooth routing, it integrates a mock Space Travel API to replicate real-world data flow and operations.</p>

<h2>Features</h2>
<h3>Home Page</h3>
<ul>
  <li>A visually engaging welcome page that introduces users to the Space Travel system.</li>
  <li>Summarizes the app’s capabilities: browse, build, and manage spacecraft; interact with planets; dispatch missions.</li>
  <li>Provides intuitive navigation to all major app areas with consistent layout and accessible design.</li>
</ul>

<h3>SpaceCrafts Page</h3>
<ul>
  <li>Fetches and displays all registered spacecraft using react state management hooks such as Context API, UseReducer, and UseState.</li>
  <li>Manages creating a spacecraft, and decomissioning existing ones.</li>
</ul>


<h3>SpaceCraft Details Page</h3>
<ul>
  <li>Shows a comprehensive overview of a selected spacecraft.</li>
  <li>Includes details such as: Name, capacity, description, and spacecraft image.</li>
</ul>


<h3>Construction Page</h3>
<ul>
  <li>Allows users to create brand-new spacecraft through a dynamic, validated form.</li>
  <li>Implements strong form handling logic such as required fields: name, capacity, and description.</li>
  <li>Prevents submission with invalid or missing data</li>
  <li>Includes a "Back" navigation option to return to the spacecrafts page without refreshing.</li>
</ul>


<h3>Planets Page</h3>
<ul>
  <li>Displays a full directory of known planets in the Space Travel universe.</li>
  <li>Each planet entry shows: Planet name and current population and list of currently stationed spacecrafts.</li>
  <li>Interactive controls allow users to: Select a spacecraft, Choose a new destination planet (must be different from its current location), Confirm dispatch to simulate a mission launch</li>
</ul>


<h3>Loading Component</h3>
<ul>
  <li>A reusable loading spinner component is shown during: API fetches, spacecraft construction, planet updates or dispatches, spacecraft details view.</li>
  <li>Helps maintain feedback and responsiveness during asynchronous operations.</li>
</ul>


<h3>Router and Error Handling</h3>
<ul>
  <li>Built using React Router v6+ for modern route management.</li>
  <li>Handles dynamic routes such as /spacecrafts/spacecraft/:id.</li>
  <li>Any unmatched route (404) redirects back to the homepage, preserving UX consistency.</li>
</ul>





<h2>Tech Stack</h2>
<ul>
    <li>React</li>
    <li>JavaScript</li>
    <li>JSX</li>
    <li>Props</li>
    <li>React Router</li>
    <li>React Hooks: useContext, useReducer, useState, useLoader, useParams</li>
    <li>Local Storage API</li>
    <li>Vite</li>
</ul>
  
<h2>How To Get Started</h2>
<ol>
  <li>git clone https://github.com/la-abdi25/SpaceTravel.git</li>
  <li>cd Space Travel Project</li>
  <li>npm install</li>
  <li>npm run dev</li>
</ol>

<h2>How to use the App</h2>
<ul>
  <li>HomePage: shows a welcoming home page that outlines the application's functionality.</li>
  <li>Spacecrafts page: Displays all spacecraft and their details.</li>
  <ul> 
    <li>Click on image to learn more about the spacecraft.</li>
    <li>Click on Build a Spacecraft to head to a form to fill out, fields name, capacity, and description are required, and an image url, hit Build to create spacecraft.</li>
    <li>Click the Back button to show newly created spacecraft.</li>
    <li>Click Destroy to delete spacecraft from spacecrafts page and planets page.</li>
  </ul>
  </li>
  <li>Planets Page: Lists all planets and stationed spacecraft. Click on spacecraft and destination planet to move spacecraft to different planet. </li>
</ul>
