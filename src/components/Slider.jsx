import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const Slider = () =>{
    const images = [
        "/s1.png",
        "/s2.png",
        "/s3.png",
    ];

    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(() => {
        const inteval = setInterval(() => {
            setcurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(inteval);
    }, [images.length]);

    return (
        <div>
            {images.map((img,index) => (
                <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-72 object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
                />
            ))}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2" >
            {images.map((_,i) => (
                <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
                >

                </div>
            ))}

            </div>
        </div>
    );
};

export default Slider