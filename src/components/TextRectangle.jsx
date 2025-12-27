export default function TextRectangle({ className = '', heading = "", content = "" }) {
  return (
    <div className={`absolute bg-[#A4A4A4BF]/75 shadow-[0_4_4_#00000025] w-[280px] sm:w-[380px] lg:w-[550px] pl-3 sm:pl-4 lg:pl-[20px] pr-4 sm:pr-6 lg:pr-[42px] pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-5 lg:pb-[27px] ${className}`}>
      <span className="font-modestic text-xs sm:text-sm lg:text-base">18/06/2023</span>
      <h3 className="font-modestic text-xl sm:text-2xl lg:text-[36px] my-2 sm:my-2.5 lg:my-[10px]">{heading}</h3>

      <p className="font-modestic text-sm sm:text-base lg:text-[20px] leading-[120%] lg:leading-[100%] mb-4 sm:mb-5 lg:mb-[22px]">
        {content}
      </p>

      <button className="font-modestic text-sm sm:text-[16px] px-3 sm:px-4 bg-[#F6F6F6] text-[#1E1E1E] py-1.5 sm:py-2 hover:bg-[#1A1A1A] hover:text-[#F6F6F6]">Read More</button>
    </div>
  )
}