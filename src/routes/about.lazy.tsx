import { createLazyFileRoute } from '@tanstack/react-router'

function About() {
  return <div className="p-2 text-[2rem] flex items-center justify-center h-[50vh] text-center font-medium">About Page</div>
}

export const Route = createLazyFileRoute('/about')({
  component: About,
})
