import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import "./app.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="navbar">
          <h1>My Blog</h1>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <main className="main-content">{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
