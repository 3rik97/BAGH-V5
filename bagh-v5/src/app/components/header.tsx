export default function Header() {
    return <div className=" hidden header lg:flex flex-row justify-between items-center w-[100%] pl-[100px] pr-[100px] pt-[12px]">
        <div className="logo-container">
            <a href="http://bagh.live"><img src="/BAGH.png" alt="logo" className="w-[104px] h-[60px]" /></a>
        </div>
        <div className="nav flex items-center gap-[20px]">
            <ul className="nav-menu flex items-center gap-[20px] ">
                <li className="nav-item p-[10px] drop-shadow-[0px_4px_4px_#000000]"><a href="#">Home</a></li>
                <li className="nav-item p-[10px] drop-shadow-[0px_4px_4px_#000000]"><a href="#">About</a></li>
                <li className="nav-item p-[10px] drop-shadow-[0px_4px_4px_#000000]"><a href="#">Service</a></li>
                <li className="nav-item p-[10px] drop-shadow-[0px_4px_4px_#000000]"><a href="#">Contact Us</a></li>
                <li className="nav-item p-[10px] drop-shadow-[0px_4px_4px_#000000]"><a href="#">Blog</a></li>
            </ul>
            <button className="w-[230px] h-[56px] bg-[#F47521] px-[85px] py-[14px] flex gap-[10px] cursor-pointer">Sign In</button>
        </div>
    </div>

}