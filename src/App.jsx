import Card from "./components/Card";
import { blogCards } from "./constants";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-primary-1">
        {blogCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <div className="text-[11px] text-center font-figtree absolute bottom-0 left-1/2 -translate-x-1/2">
        Challenge by{" "}
        <a
          className="text-blue-600"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-blue-600"
          href="https://github.com/IsaiasVillegas"
          target="_blank"
        >
          Isaias Villegas
        </a>
        .
      </div>
    </>
  );
};

export default App;
