import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import navItems, { taskGroups } from "./navigation";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isCurrentPath = (path) =>
    path === location.pathname ||
    (path === "/Jsxintro" && location.pathname === "/");

  // Колесо мыши листает навигацию по горизонтали.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleWheel = (event) => {
      // Горизонтальный скролл тачпадом оставляем браузеру.
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const maxScroll = nav.scrollWidth - nav.clientWidth;
      if (maxScroll <= 0) return;

      const step =
        event.deltaMode === 1
          ? event.deltaY * 18
          : event.deltaMode === 2
            ? event.deltaY * nav.clientWidth
            : event.deltaY;

      const nextScroll = Math.max(
        0,
        Math.min(maxScroll, nav.scrollLeft + step)
      );

      // На краях отдаём прокрутку странице.
      if (nextScroll === nav.scrollLeft) return;

      event.preventDefault();
      nav.scrollLeft = nextScroll;
    };

    nav.addEventListener("wheel", handleWheel, { passive: false });
    return () => nav.removeEventListener("wheel", handleWheel);
  }, []);

  // Подсвечиваем активный пункт при переходе между страницами.
  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector(".nav-link.active");

    if (!nav || !active) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();

    if (linkRect.left < navRect.left || linkRect.right > navRect.right) {
      active.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [location.pathname]);

  // Закрываем меню при смене страницы.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Закрытие по клику вне меню и по Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event) => {
      if (buttonRef.current?.contains(event.target)) return;
      if (panelRef.current?.contains(event.target)) return;
      setMenuOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Открываем список на активном пункте.
  useEffect(() => {
    if (!menuOpen) return;

    const panel = panelRef.current;
    const active = panel?.querySelector(".task-menu-link.active");
    if (!panel || !active) return;

    const padding = 12;
    const top = active.offsetTop;
    const bottom = top + active.offsetHeight;

    if (top < panel.scrollTop + padding) {
      panel.scrollTop = top - padding;
    } else if (bottom > panel.scrollTop + panel.clientHeight - padding) {
      panel.scrollTop = bottom - panel.clientHeight + padding;
    }
  }, [menuOpen, location.pathname]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="brand" aria-label="React Homework — на главную">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="-11 -11 22 22" fill="none">
                <circle r="2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.1">
                  <ellipse rx="10" ry="4.2" />
                  <ellipse rx="10" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="10" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </span>
            <div className="brand-copy">
              <h1 className="brand-title">
                React <em>Homework</em>
              </h1>
              <span className="brand-subtitle">JSX · Selects · Forms</span>
            </div>
          </Link>

          <button
            ref={buttonRef}
            type="button"
            className={`task-menu-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={`${menuOpen ? "Закрыть" : "Открыть"} список заданий (${
              navItems.length
            })`}
            title="Открыть список заданий"
            aria-expanded={menuOpen}
            aria-controls="task-menu-panel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="task-menu-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
                <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
                <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
                <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
              </svg>
            </span>
            <span className="task-menu-label">
              <strong>{navItems.length}</strong>
              <span className="task-menu-text"> задания</span>
            </span>
            <svg
              className="task-menu-chevron"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            ref={panelRef}
            className="task-menu-panel"
            id="task-menu-panel"
            role="region"
            aria-label="Список заданий"
          >
            <div className="task-menu-head">
              <div>
                <span className="task-menu-kicker">Навигация</span>
                <strong className="task-menu-title">Все задания</strong>
              </div>
              <span className="task-menu-badge">{navItems.length}</span>
            </div>

            <div className="task-menu-groups">
              {taskGroups.map((group) => {
                const groupItems = navItems.filter((item) => {
                  const number = Number(item.number);
                  return number >= group.from && number <= group.to;
                });

                return (
                  <section className="task-menu-group" key={group.title}>
                    <div className="task-menu-group-head">
                      <h3 className="task-menu-group-title">
                        {group.title}
                      </h3>
                      <span className="task-menu-group-count">
                        {groupItems.length}
                      </span>
                    </div>

                    {groupItems.length > 0 ? (
                      <ul className="task-menu-list">
                        {groupItems.map((item) => (
                          <li key={item.path}>
                            <NavLink
                              to={item.path}
                              onClick={() => setMenuOpen(false)}
                              className={({ isActive }) =>
                                `task-menu-link${
                                  isActive || isCurrentPath(item.path)
                                    ? " active"
                                    : ""
                                }`
                              }
                            >
                              <span className="task-menu-name">
                                {item.label}
                              </span>
                              <span className="task-menu-number">
                                {item.number}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="task-menu-empty">Пока нет заданий</p>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        )}

        <nav className="nav" ref={navRef} aria-label="Задания">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link${
                      isActive || isCurrentPath(item.path) ? " active" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
