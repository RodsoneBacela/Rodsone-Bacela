"use client";

import { motion } from "motion/react";
import { Code2, Database, BarChart3, Cpu, Lightbulb } from "lucide-react";
import { services as servicesData } from "../data/data";

const iconMap: Record<string, any> = {
  Code: Code2,
  Database: Database,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Lightbulb: Lightbulb,
};

const services = servicesData.map((service) => ({
  icon: iconMap[service.icon] || Code2,
  title: service.title,
  description: service.description,
}));

export default function Services() {
  return (
    <section className="py-32 px-6 relative overflow-hidden font-plex">
      <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-3xl mb-6  text-white">Serviços</h2>
          <p className="text-white/60 text-sm md:text-lg font-medium max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de software e análise de dados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 
                         hover:border-blue-500/50 transition-all duration-300 
                         backdrop-blur-sm"
            >
              <div
                className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 
                           flex items-center justify-center mb-6 
                           group-hover:bg-blue-500/20 transition-colors"
              >
                <service.icon className="text-blue-500" size={28} />
              </div>

              <h3 className=" text-xl md:text-2xl mb-4 text-white">{service.title}</h3>

              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
