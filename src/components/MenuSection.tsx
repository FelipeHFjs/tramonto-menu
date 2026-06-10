import type { MenuSectionData } from "../data/menu.ts";
import "./MenuSection.css";

export default function MenuSection({ title, items, note }: MenuSectionData) {
  return (
    <section className="menu-section" aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <div className="item-line">
              <h3>{item.name}</h3>
              <div className="price-group">
                <span>{item.small}</span>
                {item.large && <span>{item.large}</span>}
              </div>
            </div>
            {item.details && <p>{item.details}</p>}
          </li>
        ))}
      </ul>
      {note && <p className="section-note">{note}</p>}
    </section>
  );
}
