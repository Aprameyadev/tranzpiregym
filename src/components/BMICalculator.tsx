import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

export default function BMICalculator() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');
  const [colorClass, setColorClass] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // cm to meters
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmiValue = parseFloat((w / (h * h)).toFixed(1));
      setBmi(bmiValue);

      let cat = '';
      let adv = '';
      let col = '';

      if (bmiValue < 18.5) {
        cat = 'Underweight';
        adv = 'To build lean mass, we recommend focusing on heavy strength training coupled with high caloric density programs. Consult our dietitians.';
        col = 'text-blue-400 border-blue-400 bg-blue-400/10';
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        cat = 'Healthy Weight';
        adv = 'Fantastic job! Your body index is perfectly balanced. Focus on athletic toning, progressive overload lifts, and dynamic cardio to maintain this baseline.';
        col = 'text-green-400 border-green-400 bg-green-400/10';
      } else if (bmiValue >= 25 && bmiValue < 30) {
        cat = 'Overweight';
        adv = 'Focus on high-intensity fat shred circuits, progressive resistance drills, and a structured, clean caloric deficit. Tranzpire HIIT courses are built for this.';
        col = 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
      } else {
        cat = 'Obese';
        adv = 'Prioritize physical cardio circuits, low-impact joint conditioning, and structured professional physical training. Our metabolic coaching tier will help.';
        col = 'text-red-400 border-red-400 bg-red-400/10';
      }

      setCategory(cat);
      setAdvice(adv);
      setColorClass(col);
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
    setAdvice('');
    setColorClass('');
  };

  return (
    <section 
      id="bmi" 
      className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Form & Callout */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="text-accent text-xs font-mono uppercase tracking-widest block mb-3">
                Precision Assessment
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading tracking-tight mb-4">
                CHECK YOUR <span className="text-accent">BMI INDEX</span>
              </h2>
              <p className="text-[#BDBDBD] text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                The Body Mass Index (BMI) is a premium standardized metric to evaluate physical weight status relative to height. Calculate yours below to tailor your training pathway instantly.
              </p>
            </div>

            {/* Interactive Form */}
            <form onSubmit={calculateBMI} className="space-y-6 bg-[#161616] p-8 border border-white/5 max-w-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Height Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="height-input" className="text-xs uppercase tracking-widest text-[#BDBDBD] font-mono">
                    Height (cm)
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    required
                    min="100"
                    max="250"
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-black/40 border border-white/10 hover:border-white/20 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium"
                  />
                </div>

                {/* Weight Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight-input" className="text-xs uppercase tracking-widest text-[#BDBDBD] font-mono">
                    Weight (kg)
                  </label>
                  <input
                    id="weight-input"
                    type="number"
                    required
                    min="30"
                    max="300"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-black/40 border border-white/10 hover:border-white/20 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-widest text-xs py-4 transition-all hover:scale-[1.02] duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent/20"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate BMI
                </button>
                {bmi && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Diagnostic Result Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {bmi ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-[#161616] to-[#121212] border border-white/10 p-8 relative shadow-2xl"
                >
                  <div className="absolute top-6 right-6 p-2 bg-accent/10 border border-accent/20">
                    <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#BDBDBD] font-mono">
                    YOUR RESULTS
                  </span>

                  <div className="flex items-baseline gap-4 mt-4 mb-6">
                    <span className="text-6xl sm:text-7xl font-heading tracking-tight text-white font-bold">
                      {bmi}
                    </span>
                    <span className={`px-3 py-1 border text-xs uppercase tracking-widest font-mono font-semibold ${colorClass}`}>
                      {category}
                    </span>
                  </div>

                  {/* Range Visual Scale */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-[10px] uppercase font-mono text-[#BDBDBD]">
                      <span>Underweight</span>
                      <span>Healthy</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden flex relative">
                      <div className="w-[18.5%] h-full bg-blue-400" />
                      <div className="w-[6.5%] h-full bg-green-400" />
                      <div className="w-[5%] h-full bg-yellow-400" />
                      <div className="w-[70%] h-full bg-red-400" />

                      {/* Speedometer indicator cursor calculated dynamically */}
                      <motion.div
                        initial={{ left: '0%' }}
                        animate={{ left: `${Math.min(Math.max((bmi / 40) * 100, 5), 95)}%` }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="absolute top-0 bottom-0 w-1.5 bg-white border border-black shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="bg-black/40 border border-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-[#BDBDBD] font-light leading-relaxed">
                        {advice}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-12 border-2 border-dashed border-white/5 text-center flex flex-col items-center justify-center min-h-[300px]"
                >
                  <div className="w-16 h-16 bg-[#161616] border border-white/5 flex items-center justify-center mb-6 rounded-none">
                    <Calculator className="w-8 h-8 text-[#555]" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wider text-[#BDBDBD] mb-2">
                    AWAITING ASSESSMENT
                  </h3>
                  <p className="text-xs text-[#888] font-light max-w-sm">
                    Enter your height and weight parameters on the left to see your diagnostic BMI card instantly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
