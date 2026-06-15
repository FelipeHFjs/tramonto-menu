import MenuSection from "./MenuSection.tsx";
import type { BoardScreenProps } from "./types.ts";
import { firstColumn, secondColumn } from "../data/screen2.ts";
import { QRCodeSVG } from "qrcode.react";

const menuUrl = "https://tramonto-menu.vercel.app/";

export default function Screen2({
  seasonClass,
  isSpring,
  springPetals,
  dateLabel,
  timeLabel,
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
        <div className="menu-column menu-column-clock">
          {secondColumn.map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
          <aside
            className="column-clock column-clock-with-qr"
            aria-label={`Current time ${timeLabel} and QR for online menu`}
          >
            <div className="clock-time-block">
              <p>{dateLabel}</p>
              <strong>{timeLabel}</strong>
            </div>
            <div className="clock-qr-block">
              <QRCodeSVG
                value={menuUrl}
                size={150}
                level="M"
                includeMargin
                className="clock-qr"
                bgColor="transparent"
                fgColor="currentColor"
              />
            </div>
          </aside>
        </div>
      </section>

      <footer className="board-footer">
        <p>TRAMONTO</p>
      </footer>
    </main>
  );
}
