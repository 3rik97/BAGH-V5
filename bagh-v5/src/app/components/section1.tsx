export default function Section() {
    return <section className="section1">
        <div className="relative pt-[80px] m-auto">
            <img src="/Dice separated.png" alt="dice" className="w-[80vw] sm:w-[35vw] m-auto "/>
            <div className="bottom-0 flex flex-col justify-center gap-2">
                <h1 className="text-center font-extrabold text-[36px] leading-[44px] text-[#E8E6E3] font-['Inter']">Welcome To BAGH</h1>
                <p className="text-center font-medium text-[20px] leading-[24px] text-[#E8E6E3] font-['Inter']">Quickly start your project now and set the stage for success</p>
                <div className="btn-container m-auto flex gap-[20px] mt-[40px] mb-[80px]"> 
                    <button className="py-3 sm:w-[216px] w-[190px] sm:h-[52px] h-190px bg-[#F47521] border-2 border-[#F47521]">Join Us</button>
                    <button className="py-3 sm:w-[216px] w-[190px] sm:h-[52px] h-190px border-white border-2">Learn More</button>
                </div>
            </div>
            
        </div>
    </section>
}