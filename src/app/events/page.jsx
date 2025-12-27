import Moon from "@/components/Moon";
import TextRectangle from "@/components/TextRectangle";
import Image from "next/image";

export default function EventsPage() {
  const horizontalImagesSrc = [
    "/images/events-page/events-page-horizontal-row/image1.png",
    "/images/events-page/events-page-horizontal-row/image2.png",
    "/images/events-page/events-page-horizontal-row/image3.png",
    "/images/events-page/events-page-horizontal-row/image4.png",
    "/images/events-page/events-page-horizontal-row/image5.png",
  ]

  return (
    <main>
      <section className="mt-24 sm:mt-32 lg:mt-[156px]">
        <div className="relative h-64 sm:h-[400px] lg:h-[560px] w-full max-h-[560px] overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/events-page/events-page-image1.png"
            alt="Our Stargazers Spectacle Image"
            fill
            priority
          />

          <h2 className="absolute bottom-4 sm:bottom-8 lg:bottom-10.5 left-4 sm:left-6 lg:left-9 font-bold text-2xl sm:text-5xl lg:text-[80px] tracking-[0%] leading-tight">Our Stargazers<br />Spectacle</h2>
          <p className="absolute bottom-4 sm:bottom-12 lg:bottom-[73px] left-auto right-4 sm:right-auto sm:left-[280px] lg:left-[571px] text-sm sm:text-xl lg:text-[32px] hidden sm:block">A Journey through the Cosmos</p>
        </div>
      </section>

      <Moon sizeClassName="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96" className="absolute left-[21px] mt-8 sm:mt-16 lg:mt-[81px] hidden sm:block" />

      <section className="relative">
        <h2 className="mt-16 sm:mt-24 lg:mt-[130px] text-xl sm:text-2xl lg:text-[32px] tracking-[30%] text-center">RECENT EVENTS</h2>

        {/* First Event */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="relative ml-0 lg:ml-40 w-full sm:w-[600px] lg:w-[880px] h-72 sm:h-[450px] lg:h-[700px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/images/events-page/events-page-event1.png"
                alt="Our Stargazers Spectacle Image"
                fill
              />
            </div>

            <TextRectangle className="hidden sm:block top-16 sm:top-48 lg:top-[283px] right-0 sm:-right-32 lg:-right-60" heading="Talk on Dark Matter" content="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet." />
          </div>

          <span className="text-xl sm:text-2xl lg:text-[32px] tracking-[20%] font-bold mt-4 lg:mt-0 mr-0 lg:mr-[45px] order-first lg:order-last">#1</span>
        </div>

        {/* Second Event */}
        <div className="relative mt-16 sm:mt-24 lg:mt-40 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
          <span className="text-xl sm:text-2xl lg:text-[32px] tracking-[20%] font-bold mt-4 lg:mt-0 ml-0 lg:ml-[45px]">#2</span>

          <div className="relative ml-0 lg:ml-40 w-full sm:w-[600px] lg:w-[880px] h-72 sm:h-[450px] lg:h-[700px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/images/events-page/events-page-event2.png"
                alt="Our Stargazers Spectacle Image"
                fill
              />
            </div>

            <TextRectangle className="hidden sm:block top-16 sm:top-48 lg:top-[283px] left-0 sm:-left-32 lg:-left-60" heading="Astronauts we know" content="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet." />
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24 lg:mt-[186px] mb-5 mx-[-16px] sm:mx-[-32px] lg:mx-[-70px]">
        <div className="flex justify-center gap-2 sm:gap-3 lg:gap-5 *:shrink-0 overflow-hidden">
          {horizontalImagesSrc.map((src, index) => (
            <div key={index} className="w-36 h-24 sm:w-48 sm:h-32 lg:w-[300px] lg:h-[200px] relative">
              <Image
                className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center"
                src={src}
                alt={`image ${index + 1}`}
                fill
              />
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 sm:mt-24 lg:mt-[122px] mb-12 sm:mb-16 lg:mb-[76px] text-center text-sm sm:text-base lg:text-[20px] font-bold px-4 lg:px-0">"Astronomy compels the soul to look upwards and leads us from this world to another"</p>
    </main>
  )
}