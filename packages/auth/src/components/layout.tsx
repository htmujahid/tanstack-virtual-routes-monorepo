import { Link } from "@tanstack/react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="layout-header">Header</header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">Footer</footer>
      <Link to="/auth">sign in</Link>
    </div>
  )
}
