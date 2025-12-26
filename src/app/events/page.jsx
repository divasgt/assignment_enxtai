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
      <section className="mt-[156px]">
        <div className="relative h-[560px] w-full max-h-[560px] overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/events-page/events-page-image1.png"
            alt="Our Stargazers Spectacle Image"
            fill
          />

          <h2 className="absolute bottom-10.5 left-9 font-bold text-[80px] tracking-[0%]">Our Stargazers<br />Spectacle</h2>
          <p className="absolute bottom-[73px] left-[571px] text-[32px]">A Journey through the Cosmos</p>
        </div>
      </section>

      <Moon size="lg" className="absolute left-[21px] mt-[81px]" />

      <section className="relative">
        <h2 className="mt-[130px] text-[32px] tracking-[30%] text-center">RECENT EVENTS</h2>

        {/* First Event */}
        <div className="relative mt-16 flex justify-between ">
          <div className="relative ml-40 w-[880px] h-[700px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/images/events-page/events-page-event1.png"
                alt="Our Stargazers Spectacle Image"
                fill
              />
            </div>

            <TextRectangle className="top-[283px] -right-60" heading="Talk on Dark Matter" content="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet." />
          </div>

          <span className="text-[32px] tracking-[20%] font-bold mr-[45px]">#1</span>
        </div>

        {/* Second Event */}
        <div className="relative mt-16 flex justify-between mt-40">
          <span className="text-[32px] tracking-[20%] font-bold ml-[45px]">#2</span>

          <div className="relative ml-40 w-[880px] h-[700px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/images/events-page/events-page-event2.png"
                alt="Our Stargazers Spectacle Image"
                fill
              />
            </div>

            <TextRectangle className="top-[283px] -left-60" heading="Astronauts we know" content="Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet." />
          </div>
        </div>
      </section>

      <section className="mt-[186px] mb-5 mx-[-70px]">
        <div className="flex justify-center gap-5 *:shrink-0 overflow-hidden">
          {horizontalImagesSrc.map((src, index) => (
            <div key={index} className="w-[300px] h-[200px] relative">
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

      <p className="mt-[122px] mb-[76px] text-center text-[20px]   font-bold">“Astronomy compels the soul to look upwards and leads us from this world to another”</p>
    </main>
  )
}