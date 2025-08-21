import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (<div>
      <h1>My App</h1>
      <Outlet /> {/* This is where child routes will render */}
    </div>)
}
