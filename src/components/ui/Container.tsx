export default function Container({ children } : { children: React.ReactNode }) {
  return (
    <div className="mx-60 my-14">
        {children}
    </div>
  )
}
