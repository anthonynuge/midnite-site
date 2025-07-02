export default function Maintenance({
  title = 'Coming Soon',
  message = 'This page is under development.',
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  )
}
