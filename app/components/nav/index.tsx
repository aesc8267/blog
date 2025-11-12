
export default function Nav(){
    return (
        <div className=" sticky flex  items-center justify-end  top-0 shadow-md bg-blue-100 h-16 px-8 z-10">
                {/* <div className="w-1"></div> */}

                <ul className="right-0 ">
                    <li className="inline-block  mr-4"><a href="/">Home</a></li>
                    <li className="inline-block mr-4"><a href="/about">About</a></li>
                    <li className="inline-block mr-4"><a href="/contact">Contact</a></li>
                </ul>
        </div>
    )
}
