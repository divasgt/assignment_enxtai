export default function Moon({ className = '', sizeClassName = "w-96 h-96" }) {
  return (
    <div className={`${sizeClassName} ${className} z-10`}>
      <div className={`absolute inset-0 rounded-full overflow-hidden ${sizeClassName} bg-black`}>
        <img
          src="/images/moon/moon_PNG36.png"
          alt="Moon"
          // fill
          className="w-full h-full object-cover animate-moon-custom"
        />
      </div>

      <div
        className="moon eclipse-6"
      />
    </div>
  )
}
