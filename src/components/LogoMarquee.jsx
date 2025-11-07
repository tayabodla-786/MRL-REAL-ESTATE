import React from 'react'

const Logos = [
    "https://themrl.com/wp-content/uploads/2025/07/Bakhtawar-Amin-Medical-College-and-Hospital-project-121x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Allah-Wasaya-Textile-Mills-150x101-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Carolina-Textile-Mills-139x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Fatima-Enterprises-150x97-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Fatima-Fertilizer-Limited-150x116-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Indus-Group-of-Companies-150x125-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Fazal-Cloth-Textile-Mills-150x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Hussain-Textile-Mills-150x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Manama-Textile-Mills-133x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Allied-Enterprises-150x57-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Medicare-Hospital-150x120-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Asgard-9-Group-150x94-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Habib-Rafiq-Pvt.-Ltd-HRL-150x60-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Defence-Housing-Authority-150x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Bahria-Town-125x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Alhamdu-Textile-Mills-141x150-1.png",
    "https://themrl.com/wp-content/uploads/2025/07/Sunrays-Textile-Mills-150x135-removebg-preview.png",
    "https://themrl.com/wp-content/uploads/2025/07/Siemens-Telenor-project-150x115-removebg-preview.png",
]

const LogoMarquee = () => {
  return (
    <div className='w-full h-[250px] bg-white flex items-center overflow-hidden relative'>
        <div className='flex animate-pulse space-x-16'>
            {Logos.concat(Logos).map((logo,index) => (
                <img
                key={index}
                 src={logo}
                  alt={`logo-${index}`}
                  className='h-20 w-auto object-contain hover: scale-3d transition duration-300'
                   />
            ))}
        </div>
        <div className='absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent pointer-events-none'></div>
        <div className='absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent pointer-events-none'></div>
    </div>
  );
};

export default LogoMarquee
