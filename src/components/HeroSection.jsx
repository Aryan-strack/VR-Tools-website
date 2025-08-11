    import video1 from "../assets/video1.mp4";
    import video2 from "../assets/video2.mp4";

    const HeroSection = () => {
        return (
            <section id="home">
            <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
               DevSphere Build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {""}  for developers
                </span>
                </h1> 
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4x">
                Unleash your creativity and transform your VR app ideas into reality with our powerful and user-friendly development tools. Start building today and create immersive experiences like never before!
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className="bg-gradient-to-r from-black to-black text-white py-3 px-4 mx-3 border rounded-md hover:from-white hover:to-white  hover:text-black transition-all duration-300" >
                        Start For Free
                    </a>
                    <a href="#" className="py-3 px-4 mx-3 rounded-md border bg-white text-black hover:bg-black hover:text-white" >
                        Documentation
                    </a>
                </div>
                <div className="flex mt-10 justify-center" >
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4" >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
        <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
                </div>


            </div>
            </section>

        );

    };

    export default HeroSection;