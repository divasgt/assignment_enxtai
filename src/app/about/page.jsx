import Moon from "@/components/Moon";
import Image from "next/image";

export default function About() {
  return (
    <main className="">
      <section>
        <h1 className="mt-24 sm:mt-32 lg:mt-[191px] font-bold text-4xl sm:text-6xl lg:text-[96px] tracking-[6%]">ABOUT US.</h1>

        <div className="mt-6 sm:mt-10 lg:mt-[50px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[105px]">
          <div className="relative w-48 h-56 sm:w-64 sm:h-72 lg:w-[335px] lg:h-[370px] shrink-0">
            <Image src="/images/Dhruva-Final-(2).png" alt="About" fill className="object-cover" />
          </div>
          <p className="font-inter font-medium text-sm sm:text-base lg:text-[20px] tracking-[2%] leading-[140%] lg:leading-[120%] text-center lg:text-left px-4 lg:px-0">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
          </p>
        </div>
      </section>

      <Moon className="absolute -right-8 lg:-right-[68px] -mt-12 lg:-mt-[88px] hidden sm:block" sizeClassName="w-48 h-48 sm:w-64 sm:h-64 lg:w-[359px] lg:h-[356px]" />

      <div className="mt-20 sm:mt-28 lg:mt-[167px] relative w-screen min-h-[300px] sm:min-h-[450px] lg:min-h-[600px] -mx-4 sm:-mx-8 lg:-mx-[70px] overflow-hidden">
        <Image
          src="/images/about-page/group-photo.png"
          alt="Group Photo"
          fill
          className="object-cover object-center"
        />
      </div>

      <section>
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] text-center mt-12 sm:mt-16 lg:mt-[102px] mb-8 sm:mb-12 lg:mb-[87px]">Team LEADERS OF OUR CLUb</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 sm:gap-x-4 lg:gap-x-5 gap-y-4 sm:gap-y-6 lg:gap-y-2.5">
          {Array(18).fill().map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5 sm:gap-2 lg:gap-2.5">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-[200px] lg:h-[200px] rounded-xl sm:rounded-2xl lg:rounded-[20px] overflow-hidden">
                <Image
                  src={`/images/about-page/team-leaders/image${index + 1}.png`}
                  alt={`Team Member ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col items-center gap-1 sm:gap-1.5 lg:gap-2.5">
                <span className="font-bold text-xs sm:text-sm lg:text-base">NAME</span>
                <span className="font-bold text-xs sm:text-sm lg:text-base">POST</span>
              </div>
            </div>
          ))
          }
        </div>
      </section>

      <p className="mt-12 sm:mt-16 lg:mt-[117px] mb-12 sm:mb-16 lg:mb-[76px] text-center text-sm sm:text-base lg:text-[20px] font-bold px-4 lg:px-0">"Astronomy compels the soul to look upwards and leads us from this world to another"</p>
    </main>
  )
}