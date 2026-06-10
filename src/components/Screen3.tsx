import MenuSection from "./MenuSection.tsx";
import type { BoardScreenProps } from "./types.ts";
import { firstColumn, secondColumn } from "../data/screen3.ts";

export default function Screen3({
  seasonClass,
  isSpring,
  springPetals,
}: BoardScreenProps) {
  return (
    <main className={`tv-board ${seasonClass}`}>
      {isSpring && (
        <div className="spring-petals" aria-hidden="true">
          {springPetals.map((petalIndex) => (
            <span key={petalIndex} className="petal" />
          ))}
        </div>
      )}

      <header className="board-header">
        <div>
          <p className="kicker">Tramonto</p>
        </div>
      </header>

      <section className="menu-grid">
        <div className="menu-column">
          {firstColumn.map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
        </div>
        <div className="menu-column">
          {secondColumn.map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
        </div>
      </section>

      <footer className="board-footer">
        <p>TRAMONTO</p>
      </footer>
    </main>
  );
}
