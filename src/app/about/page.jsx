import Moon from "@/components/Moon";
import Image from "next/image";

export default function About() {
  return (
    <main className="">
      <section>
        <h1 className="mt-[191px] font-bold text-[96px] tracking-[6%]">ABOUT US.</h1>

        <div className="mt-[50px] flex items-center justify-center gap-[105px]">
          <div className="relative w-[335px] h-[370px] shrink-0">
            <Image src="/images/Dhruva-Final-(2).png" alt="About" fill className="object-cover" />
          </div>
          <p className="font-inter font-medium text-[20px] tracking-[2%] leading-[120%]">
            Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
          </p>
        </div>
      </section>

      <Moon className="absolute -right-[68px] -mt-[88px]" sizeClassName="w-[359px] h-[356px]" />

      <div className="mt-[167px] relative w-screen min-h-[600px] -mx-[70px] overflow-hidden">
        <Image
          src="/images/about-page/group-photo.png"
          alt="Group Photo"
          fill
          className="object-cover object-center"
        />
      </div>

      <section>
        <h2 className="font-bold text-[40px] text-center mt-[102px] mb-[87px]">Team LEADERS OF OUR CLUb</h2>

        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-2.5">
          {Array(18).fill().map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2.5">
              <div className="relative w-[200px] h-[200px] rounded-[20px] overflow-hidden">
                <Image
                  src={`/images/about-page/team-leaders/image${index + 1}.png`}
                  alt={`Team Member ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              <div className="flex flex-col items-center gap-2.5">
                <span className="font-bold">NAME</span>
                <span className="font-bold">POST</span>
              </div>
            </div>
          ))
          }
        </div>
      </section>

      <p className="mt-[117px] mb-[76px] text-center text-[20px]   font-bold">“Astronomy compels the soul to look upwards and leads us from this world to another”</p>
    </main>
  )
} 