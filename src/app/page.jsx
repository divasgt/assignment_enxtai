import Carousel from "@/components/Carousel";
import Moon from "@/components/Moon";
import TextRectangle from "@/components/TextRectangle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="mt-24 sm:mt-40 lg:mt-[221px] text-3xl sm:text-5xl lg:text-[5rem] font-bold leading-tight lg:leading-normal">Let's travel to the edge of space</h1>
        <p className="mt-2 sm:mt-[10px] font-modestic text-base sm:text-xl lg:text-2xl">We are a group that love to explore and learn new information related to our universe.<br className="hidden sm:inline" />Join us and Explore</p>
        <button className="mt-4 sm:mt-[30px] font-light tracking-[20%] border-2 border-white h-10 sm:h-[50px] w-44 sm:w-[220px] text-sm sm:text-base hover:bg-white hover:text-black duration-300 ease-linear transition-all active:bg-transparent active:border-[#AEAEAE] active:text-[#AEAEAE] active:duration-0">DISCOVER MORE</button>

        <Moon sizeClassName="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96" className="absolute right-4 sm:right-12 lg:right-[148px] -mt-16 sm:-mt-8 lg:-mt-[30px] hidden sm:block" />

        <div className="fixed bottom-[5px] right-0 flex-col items-center gap-6.5 hidden sm:flex">
          <span className="rotate-90 font-montserrat font-[900] text-[8px] uppercase tracking-[40%]">
            SCROLL
          </span>
          <svg width="5" height="30" viewBox="0 0 5 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.89336 29.2131C2.00444 29.3242 2.18453 29.3242 2.29561 29.2131L4.10571 27.403C4.21679 27.2919 4.21679 27.1118 4.10571 27.0007C3.99464 26.8897 3.81455 26.8897 3.70347 27.0007L2.09448 28.6097L0.485497 27.0007C0.37442 26.8897 0.194328 26.8897 0.0832505 27.0007C-0.0278265 27.1118 -0.0278265 27.2919 0.0832505 27.403L1.89336 29.2131ZM1.81005 0L1.81005 29.012H2.37891L2.37891 0L1.81005 0Z" fill="white" />
          </svg>
        </div>
      </section>

      <section>
        <h2 className="font-modestic text-xl sm:text-2xl lg:text-[32px] mt-32 sm:mt-60 lg:mt-[318px]">RECENT EVENTS</h2>
        <div className="relative h-64 sm:h-[400px] lg:h-[560px] w-full lg:max-w-[1299px] lg:max-h-[560px] mt-2 sm:mt-[10px] overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/home-page-event.jpg"
            alt="cosmic nebula image"
            fill
          />

          <TextRectangle className="right-2 sm:right-8 lg:right-[109px] top-4 sm:top-12 lg:top-[91px]" heading="Talk on Cosmic Nebula" content="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet." />
        </div>
      </section>

      <section>
        <h2 className="mt-24 sm:mt-40 lg:mt-[202px] mb-8 sm:mb-16 lg:mb-[92px] font-modestic tracking-[20%] text-xl sm:text-2xl lg:text-[32px] text-center">WHAT'S IT LIKE WHEN WE HAVE EVENTS</h2>
        <Carousel />
      </section>

      <section>
        <h2 className="mt-16 sm:mt-24 lg:mt-[111px] font-modestic tracking-[20%] text-xl sm:text-2xl lg:text-[32px] text-center">KNOW MORE ABOUT US HERE</h2>
        <div className="mt-8 sm:mt-16 lg:mt-[131px] flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
          <div className="relative w-40 h-44 sm:w-52 sm:h-60 lg:w-[264px] lg:h-[291px] overflow-hidden shrink-0">
            <Image
              src="/images/Dhruva-Final-(2).png"
              fill
              alt="Dhruva Image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h3 className="font-lemon text-xl sm:text-2xl lg:text-4xl leading-[150%] lg:leading-[190%] uppercase">wE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING RELATED TO OUR UNIVERSE.</h3>
            <p className="mt-3 sm:mt-4 lg:mt-[18px] text-base sm:text-xl lg:text-2xl font-light leading-[150%] lg:leading-[190%] uppercase">Dhruva is a College club, we work toward increasing knowledge about space, cosmos and everything we are still learning about. We share and learn together.</p>
          </div>
        </div>
      </section>

      <p className="mt-16 sm:mt-24 lg:mt-[122px] mb-12 sm:mb-16 lg:mb-[76px] text-center text-sm sm:text-base lg:text-[20px] font-bold px-4 lg:px-0">"Astronomy compels the soul to look upwards and leads us from this world to another"</p>
    </main>
  )
}
