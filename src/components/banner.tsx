
import banner from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6">
                <div className="grid w-full grid-cols-1 items-center px-1">

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">Build Your Ideal</h1>
                    <h1 className="text-7xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</h1>
                    <p>Explore frontend,&backend, database, and tooling options,<br></br>
                        compare them side by side, and put together the stack that fits your<br></br> next project.
                    </p>
                    <div className="mt-7 flex gap-5 items-center">
                        <button className="
                  rounded-md
                  bg-gradient-to-r from-[#ff6b35] to-[#ed3d91]
                  px-3 py-2
                  text-[10px]
                  font-medium
                  text-white
                  shadow-sm
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ed3d91]/40
                ">Explore Technologies</button>
                        <button className="
                  rounded-md
                  border border-[#e5e7eb]
                  bg-white
                  px-7 py-2
                  text-[10px]
                  font-medium
                  text-[#475569]
                  transition
                  duration-200
                  hover:border-[#cbd5e1]
                  hover:bg-[#f8fafc]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-200
                ">Learn More</button>
                    </div>

                </div>

                <div>
                    <img src={banner} alt="" />
                </div>
            </div>

        </section>

    );
};

export default Banner;