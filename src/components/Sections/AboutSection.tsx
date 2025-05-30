import Image from "next/image"

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-16 px-6 md:px-12 lg:px-24 bg-neutral-950 border-b-1 border-dashed border-neutral-500 font-plex">
                <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Div for Photo */}
                    <div className="w-full md:w-1/3 flex justify-center">
                            <Image
                                src="/images/me-back.png"
                                alt="foto perfil"
                                width={400} 
                                height={600} 
                                className="rounded-lg shadow-lg w-42 h-42 md:w-56 md:h-72 lg:w-92 lg:h-120  object-cover border-1 border-neutral-400"
                            />
                            
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Mim</h2>
                        <p className="text-neutral-300 text-lg leading-relaxed mb-6 text-justify">
                            Desenvolvedor de software com foco em front-end, 
                            crio soluções que são não apenas inovadoras e funcionais, mas também visualmente impactantes. 
                            Minha experiência inclui React.js e Next.js, complementada por uma base sólida em análise de dados e Python. 
                            Sou atento aos detalhes, com excelente capacidade de resolução de problemas e comunicação. 
                            O objetivo é sempre entregar resultados e qualidade, seja atuando em equipe ou de forma independente.
                        </p>
                        <a href="about" className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-200 transition duration-300">Ver Mais</a>
                    </div>
                </div>
            </section>
    )
}