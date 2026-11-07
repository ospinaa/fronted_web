import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="site-header">
      <div className="brand">Coffee Orders</div>
      <nav aria-label="Navegación principal">
        <Link href="/" className="nav-link">Inicio</Link>
        <Link href="/orders" className="nav-link">Pedidos</Link>
        <Link href="/login" className="nav-link">Iniciar sesión</Link>
        <Link href="/register" className="nav-link">Registrarse</Link>
      </nav>
    </header>
  );
}