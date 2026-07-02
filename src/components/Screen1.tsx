import MenuSection from "./MenuSection.tsx";
import { coffeeFlavorNote } from "../data/coffee.ts";
import { firstColumn, secondColumn } from "../data/screen1.ts";
import type { BoardScreenProps } from "./types.ts";

export default function Screen1({
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
          {/* <h1>Beverage Menu</h1> */}
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
          <aside
            className="column-clock column-note"
            aria-label="Available flavors"
          >
            {coffeeFlavorNote.map((note) => (
              <div key={note.name} className="note-block">
                <h3>{note.name}</h3>
                {"items" in note ? (
                  <ul className="note-items">
                    {note.items.map((item) => (
                      <li
                        key={item.name}
                        className={`note-item${item.accent ? " note-item-accent" : ""}`}
                      >
                        <div className="note-item-line">
                          <span>{item.name}</span>
                          {item.price && <strong>{item.price}</strong>}
                        </div>
                        {item.description && (
                          <p className="note-item-description">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{note.description}</p>
                )}
              </div>
            ))}
          </aside>
        </div>
      </section>

      <footer className="board-footer">
        <p>TRAMONTO</p>
      </footer>
    </main>
  );
}
