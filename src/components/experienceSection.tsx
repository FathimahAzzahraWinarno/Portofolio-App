export default function ExperienceSection() {
    const experiences = [ 
        {
            title: "Frontend Internship - PT Taharica",
            date: "2024",
            desc: "Mengembangkan website rekrutment dan fitur dashboard menggunakan Laravel dan Tailwindcss. Bertanggung jawab pada halaman frontend seperti login, dashboard dan fitur CRUD data,"
        },
        {
            title: "Frontend - Proyek Grantify",
            date: "2023",
            desc: "Membangun aplikasi mobile untuk mempermudah pengguna dalam mencari informasi mengenai beasiswa, volunteer, dan pekerjaan"
        },
        {
            title: "UI/UX Design - Proyek URBOOKS",
            date: "2023",
            desc: "Mendesain aplikasi mobile agar mudah digunakan untuk user, kemudian aplikasi ini digunakan untuk mendonasikan buku ke taman baca yang telah terdaftar pada aplikasi, selain itu pada aplikasi ini dapat bertukar buku dengan yang lainnya menggunakan fitur nearby untuk lebih mudah menemukan yang terdekat.",
        },
        {
            title: "Frontend - Proyek Angcode",
            date: "2024",
            desc: "Mengembangkan aplikasi website untuk memudahkan user dalam melakukan pembelajaran mengenai pemrograman, kemudian terdapat tingkatan level dimulai dari basic, beginner, dan intermediate."
        },
        {
            title: "Fullstack - Proyek Medvet Animal Klinik",
            date: "2025",
            desc: "Mengembangkan aplikasi website yang berguna untuk memudahkan pelanggan dalam mencari tau informasi mengenai klinik secara akurat dan real-time, kemudian memudahkan pelanggan untuk melakukan reservasi tanpa perlu datang ke klinik dahulu, dan menyimpan rekam medis digital untuk mengurangi hilang atau rusaknya rekam medis."
        }
    ];

    return (
    <section
        id="experience"
        className="scroll-mt-24 min-h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] px-4 py-12"
    >
        <h2 className="text-4xl font-bold mb-16 text-center text-white">My Experience</h2>
        <div className="space-y-16">
            {experiences.map((exp, idx) => (
                <div
                key={idx}
                className={`flex flex-col md:flex-row items-center md:items-stretch ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
                } gap-6`}
    >
                    <div className="md:w-1/2">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition text-white">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-sm text-gray-300">{exp.date}</p>
                        <p className="mt-2 text-gray-200">{exp.desc}</p>
                    </div>
                    </div>
                        <div className="md:w-1/2 hidden md:block" />
                </div>
            ))}
        </div>
    </section>
    );
}