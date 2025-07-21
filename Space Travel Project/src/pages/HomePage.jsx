import "../styling/HomePage.css";

//Home Page: a welcoming home page that outlines the application's functionality
const HomePage = () => {
  return (
    <section className="HomePage">
      <h1 className="HomePage-header1">
        Space Travel: Expanding Horizons Beyond Earth{" "}
      </h1>
      <div>
        <h1 className="HomePage-header2">🌌 Journey into the Future</h1>
        <p className="HomePage-description">
          In a world where the impossible has become reality, where the stars
          are no longer out of reach, welcome to the future of humanity's
          survival and exploration. Witness the evolution of technology as it
          transforms barren planets into thriving havens, all made possible by
          the wonders of innovation and human determination.
        </p>
      </div>
      <div>
        <h1 className="HomePage-header2">🌍 From Neglect to Innovation</h1>
        <p className="HomePage-description">
          Once the cradle of civilization, Earth now stands as a solemn reminder
          of the consequences of neglect and environmental decline. But fear
          not, for the ingenuity of mankind has soared to new heights. With our
          relentless pursuit of advancement, we have not only healed our scars
          but extended our reach across the cosmos.
        </p>
      </div>
      <div>
        <h1 className="HomePage-header2">
          {" "}
          🚀 Enter Space Travel: Where Dreams Take Flight
        </h1>
        <p className="HomePage-description">
          Embark on an extraordinary journey with our groundbreaking web
          application, aptly named "Space Travel." As a commander engineer, the
          fate of humanity's exodus rests in your capable hands. Prepare to face
          the ultimate challenge: evacuating humankind from their birthplace and
          guiding them towards a future among the stars.
        </p>
      </div>
      <div>
        <h1 className="HomePage-header2">🔧 Engineer, Explorer, Leader </h1>
        <p className="HomePage-description">
          Space Travel empowers you to engineer, design, and even dismantle
          spacecraft. Craft vessels that defy the boundaries of imagination,
          envisioning a future where life flourishes beyond the stars. But
          remember, your role extends beyond construction - you are a leader, an
          explorer, a commander steering humanity's destiny.
        </p>
      </div>
      <div>
        <h1 className="HomePage-header2">
          🌠 A Universe of Possibilities Awaits
        </h1>
        <p className="HomePage-description">
          Immerse yourself in the thrill of exploration as you chart
          interplanetary courses within our solar system. Seamlessly navigate
          your fleet of spacecraft, hurtling through the cosmic void from one
          celestial body to another. The universe becomes your playground, and
          every planet a potential new home.
        </p>
      </div>
    </section>
  );
};
//export Homepage for further use
export default HomePage;
