import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface SectionProps {
  plotPoint: string;
  title: string;
  lengthSeconds: number;
  description: string;
  suggestedVO: string;
  whatWeSee: string;
  accomplishment: string;
  icon: string;
  index: number;
  key?: any;
}

export default function Section({ plotPoint, title, lengthSeconds, description, suggestedVO, whatWeSee, accomplishment, icon, index }: SectionProps) {
  const IconComponent = (Icons as any)[icon] || Icons.HelpCircle;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 border-b border-zinc-200"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-100 rounded-xl text-zinc-900">
              <IconComponent size={24} />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{plotPoint}</h3>
              <h2 className="text-3xl font-sans font-medium tracking-tight text-zinc-900">{title}</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-zinc-600 leading-relaxed">{description}</p>
            <div className="bg-zinc-100 p-4 rounded-lg text-sm text-zinc-700">
              <span className="font-semibold text-zinc-900">Length:</span> {lengthSeconds} seconds
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Suggested VO</h4>
            <p className="text-sm text-zinc-600 leading-relaxed italic whitespace-pre-line">"{suggestedVO}"</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">What we see on the screen</h4>
            <p className="text-sm text-zinc-600 leading-relaxed">{whatWeSee}</p>
          </div>
          <div className="space-y-2 pt-4 border-t border-zinc-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">What We Are Looking to Accomplish</h4>
            <p className="text-sm text-zinc-800 font-medium">{accomplishment}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
