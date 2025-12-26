import Image from 'next/image';

export default function Moon({ className = '', sizeClassName="w-96 h-96"}) {
  return (
    <div className={`${sizeClassName} ${className} z-10`}>
      {/* Ellipse 5 - Dark radial gradient shadow */}
      {/* <div
        className={`absolute inset-0 rounded-full opacity-70 ${sizeClassName}`}
        style={{
          background: 'radial-gradient(circle at 30% 30%, #000000 0%, #000000 50%, transparent 100%)',
        }}
      /> */}

      {/* Ellipse 4 - Lighter radial gradient overlay */}
      {/* <div
        className={`absolute inset-0 rounded-full opacity-56 ${sizeClassName}`}
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, transparent 70%)',
          mixBlendMode: 'overlay',
        }}
      /> */}

      {/* Mask Group - Moon image with circular mask */}
      <div className={`absolute inset-0 rounded-full overflow-hidden ${sizeClassName} bg-black`}>
        <img
          src="/images/moon/moon_PNG36.png"
          alt="Moon"
          // fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ellipse 3 - Small circular accent (optional highlight) */}
      {/* <div
        className="absolute w-16 h-16 rounded-full opacity-0"
        style={{
          background: '#C4C4C4',
          top: '20%',
          left: '25%',
        }}
      /> */}

      {/* Ellipse 6 - Dark circular shadow at bottom */}
      <div
        className="moon eclipse-6"
        // style={{
        //   background: '#000000',
        //   width: '268.85px',
        //   height: '228.27px',
        //   bottom: '-15%',
        //   left: '50%',
        //   transform: 'translateX(-50%)',
        //   filter: 'blur(143.27px)',
        // }}
      />
    </div>
  )
}
