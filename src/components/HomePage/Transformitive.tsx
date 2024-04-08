import Video from "../../utils/Video";

const Transformitive = () => {
  return (
    <div className="px-8 sm:px-0 my-14 w-full max-w-[1140px] mx-auto flex flex-col gap-24">
      <div className="my-10">
        <span className="pt-3 mr-3  text-[20px] md:float-left text-[#000]">Our Ambition</span>
        <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[64px] -tracking-[1.76px] leading-[36px] md:leading-[64px] text-[#000] max-w-[32ch] ">We create transformative brands that move <span className="ambition-line">businesses</span>, <span className="ambition-line" >people</span> and the <span className="ambition-line" >world</span> <span className="ambition-line">forward</span>.</p>
      </div>
      <Video/>
    </div>

  )
}

export default Transformitive
