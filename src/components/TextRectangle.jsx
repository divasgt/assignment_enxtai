export default function TextRectangle({className = '', heading = "", content = ""}) {
  return (
  <div className={`absolute bg-[#A4A4A4BF]/75 shadow-[0_4_4_#00000025] w-[550px] pl-[20px] pr-[42px] pt-10 pb-[27px] ${className}`}>
    <span className="font-modestic">18/06/2023</span>
    <h3 className="font-modestic text-[36px] my-[10px]">{heading}</h3>

    <p className="font-modestic text-[20px] leading-[100%] mb-[22px]">
      {content}
    </p>

    <button className="font-modestic text-[16px] px-4 bg-[#F6F6F6] text-[#1E1E1E] py-2 hover:bg-[#1A1A1A] hover:text-[#F6F6F6]">Read More</button>
  </div>
  )
}