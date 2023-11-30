import MainLayout from "../../layout/MainLayout";
import "./AboutPage.css";
import { about } from "../../data";

export default function AboutPage() {
  return (
    <>
      <MainLayout>
        <div className="main-contain">
          <div className="section">
            <h1>This is us.</h1>
            <p>
              Welcome to IntimateCode, where passion meets programming! 🌟 We're
              not just your ordinary online lingerie shop; we're the brainchild
              of two tech enthusiasts who decided to infuse a bit of code into
              the world of fashion. Meet Kata and Viki, your friendly
              neighborhood programmers turned lingerie aficionados. At
              IntimateCode, we've woven lines of code into the delicate fabrics
              of our lingerie collections, creating a seamless blend of
              technology and sensuality. As self-proclaimed code wizards, we
              found inspiration in the binary dance of 1s and 0s and decided to
              translate that binary beauty into the world of beautiful lingerie.
              <br />
              <br />
              Why settle for the ordinary when you can embrace the
              extraordinary? Our collections are curated with the precision of a
              well-optimized algorithm, ensuring you find the perfect balance
              between comfort and allure. From lace that echoes the elegance of
              well-structured code to fabrics that feel like a soft debugged
              program, each piece tells a story of craftsmanship and passion.
              Join us on this journey where lines of code meet curves, and
              algorithms entwine with lace.
              <br />
              <br />
              At IntimateCode, we're not just selling lingerie; we're crafting
              an experience where fashion meets function, and where the artistry
              of programming meets the art of feeling beautiful. Happy coding
              and happy shopping! 💖✨
            </p>
          </div>
          <div className="section">
            <img src={about} alt="Kata and Viki" width="900" height="600" />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
