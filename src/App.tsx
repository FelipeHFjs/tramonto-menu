import { useEffect, useMemo, useRef, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

import Screen1 from "./components/Screen1.tsx";
import Screen2 from "./components/Screen2.tsx";
import Screen3 from "./components/Screen3.tsx";
import MainScreen from "./components/MainScreen.tsx";
import { getSeasonFromMonth } from "./data/seasons.ts";
import "./App.css";
import "./components/SpringAnimation.css";
import "./components/SummerAnimation.css";

const springPetals = Array.from({ length: 10 }, (_, index) => index);

function App() {
  const [now, setNow] = useState(() => new Date());
  const [isRouteNavVisible, setIsRouteNavVisible] = useState(false);
  const hideRouteNavTimerRef = useRef<number | null>(null);

  const clearHideRouteNavTimer = () => {
    if (hideRouteNavTimerRef.current !== null) {
      window.clearTimeout(hideRouteNavTimerRef.current);
      hideRouteNavTimerRef.current = null;
    }
  };

  const scheduleHideRouteNav = () => {
    clearHideRouteNavTimer();
    hideRouteNavTimerRef.current = window.setTimeout(() => {
      setIsRouteNavVisible(false);
      hideRouteNavTimerRef.current = null;
    }, 5_000);
  };

  const showRouteNav = () => {
    setIsRouteNavVisible(true);
    scheduleHideRouteNav();
  };

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => clearHideRouteNavTimer();
  }, []);

  const timeLabel = useMemo(
    () =>
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [now],
  );

  const dateLabel = useMemo(
    () =>
      now.toLocaleDateString([], {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
    [now],
  );

  const seasonClass = useMemo(
    () => `season-${getSeasonFromMonth(now.getMonth())}`,
    [now],
  );

  const isSpring = useMemo(
    () => getSeasonFromMonth(now.getMonth()) === "spring",
    [now],
  );

  const screenProps = {
    seasonClass,
    isSpring,
    springPetals,
    dateLabel,
    timeLabel,
  };

  return (
    <>
      <nav
        className={`route-nav${isRouteNavVisible ? " route-nav-visible" : ""}`}
        aria-label="Screen navigation"
        onMouseEnter={showRouteNav}
        onMouseLeave={scheduleHideRouteNav}
        onFocus={showRouteNav}
        onBlur={scheduleHideRouteNav}
        onTouchStart={showRouteNav}
      >
        <NavLink to="/">Main</NavLink>
        <NavLink to="/screen-1">Screen 1</NavLink>
        <NavLink to="/screen-2">Screen 2</NavLink>
        <NavLink to="/screen-3">Screen 3</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MainScreen {...screenProps} />} />
        <Route path="/screen-1" element={<Screen1 {...screenProps} />} />
        <Route path="/screen-2" element={<Screen2 {...screenProps} />} />
        <Route path="/screen-3" element={<Screen3 {...screenProps} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
