import { Fragment } from "react";
import { coffee, coffeeFlavorNote } from "../data/coffee.ts";
import { desserts } from "../data/desserts.ts";
import { frappes } from "../data/frappes.ts";
import { refreshers } from "../data/refreshers.ts";
import { signatureDrinks } from "../data/signatureDrinks.ts";
import { smoothies } from "../data/smoothies.ts";
import { tea } from "../data/tea.ts";
import type { MenuSectionData } from "../data/menu.ts";
import type { BoardScreenProps } from "./types.ts";
import "./MainScreen.css";

const allSections: MenuSectionData[] = [
  { title: "Coffee", items: coffee },
  { title: "Frappe", items: frappes },
  { title: "Refreshers", items: refreshers },
  { title: "Smoothies", items: smoothies },
  { title: "Signature Drinks", items: signatureDrinks },
  { title: "Tea", items: tea },
  { title: "Desserts", items: desserts },
];

export default function MainScreen({
  seasonClass,
  isSpring,
  springPetals,
}: BoardScreenProps) {
  return (
    <main className={`tv-board main-menu-board ${seasonClass}`}>
      {isSpring && (
        <div className="spring-petals" aria-hidden="true">
          {springPetals.map((petalIndex) => (
            <span key={petalIndex} className="petal" />
          ))}
        </div>
      )}

      <header className="board-header main-menu-header">
        <div>
          <p className="kicker">Tramonto</p>
        </div>
      </header>

      <aside className="main-menu-store-note" aria-label="Store location note">
        Buscanos en la tienda Rapix Mart campo 101
      </aside>

      <section className="all-menu-grid" aria-label="Full menu categories">
        {allSections.map((section) => (
          <Fragment key={section.title}>
            <article className="all-menu-section">
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="all-menu-item-row">
                      <h3>{item.name}</h3>
                      <div className="all-menu-prices">
                        <span>{item.small}</span>
                        {item.large && <span>{item.large}</span>}
                      </div>
                    </div>
                    {item.details && <p>{item.details}</p>}
                  </li>
                ))}
              </ul>
            </article>

            {section.title === "Coffee" && (
              <aside
                className="all-menu-section all-menu-notes"
                aria-label="Coffee extras and flavors"
              >
                {coffeeFlavorNote.map((note) => (
                  <section key={note.name} className="all-menu-note-block">
                    <h3>{note.name}</h3>
                    {"items" in note ? (
                      <ul>
                        {note.items.map((item) => (
                          <li
                            key={item.name}
                            className={
                              item.accent
                                ? "all-menu-note-item-accent"
                                : undefined
                            }
                          >
                            <div className="all-menu-note-row">
                              <span>{item.name}</span>
                              {item.price && <strong>{item.price}</strong>}
                            </div>
                            {item.description && <p>{item.description}</p>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{note.description}</p>
                    )}
                  </section>
                ))}
              </aside>
            )}
          </Fragment>
        ))}
      </section>
    </main>
  );
}
