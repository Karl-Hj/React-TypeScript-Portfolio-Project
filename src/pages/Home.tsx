import "./home.css";

export function Home() {
  return (
    <div className="home-container">
      <div className="mask-container">
        <div className="background" />
      </div>

      <div className="text-intro">
        <p>
          Hello! I am a junior developer looking to make my mark in the
          industry. <br />
          This site showcases some of my projects, with my contact details and a
          link to my full portfolio available at the bottom of the page. More
          projects will be added in the coming future.
        </p>
      </div>
      <div className="text-signature">
        <p>Karl Hjertstedt</p>
      </div>
    </div>
  );
}
