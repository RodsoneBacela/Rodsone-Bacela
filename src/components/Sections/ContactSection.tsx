import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <div className="w-full bg-black/10 font-font-plex-sans py-20">
      <div className="max-w-[1440px] w-full px-4 sm:px-8 mx-auto flex flex-col gap-10 justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact me</h2>

        <p className="text-base sm:text-lg md:text-xl">
          Estou sempre aberto a novas oportunidades e parcerias.<br/>
          Se você tem um projeto interessante ou quer bater um papo,
          entre em contato!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full overflow-hidden">
            <Image
              src="/images/me.png"
              alt="me memoji"
              width={72}
              height={72}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg sm:text-xl font-bold">Rodsone Bacela</p>
        </div>

        <div className='flex flex-col gap-2 '>
          <Link
            href="mailto:rodsonfernandes03@gmail.com"
            className="bg-white text-black px-4 py-2 text-sm sm:text-base font-semibold rounded-md"
          >
            rodsonfernandes03@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/rodsone-bacela"
            className="bg-white text-black px-4 py-2 text-sm sm:text-base font-semibold rounded-md"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
