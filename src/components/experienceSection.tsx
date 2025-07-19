export default function experienceSection () {
    return(
        <section
            id="experience"
            className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center border-b px-4"
        >
        <h2 className="text-4xl font-bold mb-8 text-center">My Experience</h2>
        <div className="max-w-3xl space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold">Frontend Intern - PT Taharica</h3>
                <p className="text-sm text-gray-300">Februari 2025 – Sekarang</p>
                <p className="mt-2 text-gray-200">
                    Mengembangkan website rekrutmen dan fitur dashboard menggunakan Laravel dan TailwindCSS. Bertanggung jawab pada halaman frontend seperti login, dashboard, dan fitur CRUD data.
                </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold">UI/UX Design – Proyek Grantify</h3>
                <p className="text-sm text-gray-300">2024</p>
                <p className="mt-2 text-gray-200">
                    Mendesain aplikasi mobile pencari beasiswa bernama Grantify menggunakan Figma. Fokus pada user flow, wireframe, dan high-fidelity prototype.
                </p>
            </div>
            </div>
        </section>
    );
}