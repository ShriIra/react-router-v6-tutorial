import featImg from "../assets/img-main.jpg";

export default function Home() {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Shri Ira Tech conference attendees on a laptop"
      />

      <h1>Welcome</h1>
      <p>
        This is a fictitious company and conference created by{" "}
        <a
          href="https://www.shriira.one/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Shri Ira IT Solutions, or its affiliates
        </a>
        , solely for the creation and development of educational training
        materials. Any resemblance to real products or services is purely
        coincidental. Information provided about the products or services is
        also fictitious and should not be construed as representative of actual
        products or services on the market in a similar product or service
        category.
      </p>
    </div>
  );
}
