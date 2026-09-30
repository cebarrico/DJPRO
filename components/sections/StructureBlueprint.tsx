"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const lineTransition = (delay = 0) => ({
  duration: 1.25,
  delay,
  ease,
});

function DrawnPath({
  d,
  delay = 0,
  className,
}: {
  d: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.path
      d={d}
      pathLength={1}
      initial={{ pathLength: 0, opacity: 0.35 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={lineTransition(delay)}
      className={className}
    />
  );
}

function SpeakerStack({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
      className="fill-none stroke-[#55dbe9]"
      strokeWidth="1.25"
      vectorEffect="non-scaling-stroke"
    >
      {[0, 1, 2].map((level) => {
        const y = 278 + level * 73;
        return (
          <g key={level}>
            <DrawnPath d={`M${x} ${y}h102v70h-102z M${x + 8} ${y + 7}h86v56h-86z`} delay={delay + level * 0.08} />
            <DrawnPath d={`M${x + 10} ${y + 11}l82 48 M${x + 92} ${y + 11}l-82 48`} delay={delay + 0.08 + level * 0.08} className="opacity-30" />
            <circle cx={x + 17} cy={y + 17} r="2" className="fill-[#55dbe9]/70" />
            <circle cx={x + 85} cy={y + 17} r="2" className="fill-[#55dbe9]/70" />
            <circle cx={x + 17} cy={y + 59} r="2" className="fill-[#55dbe9]/70" />
            <circle cx={x + 85} cy={y + 59} r="2" className="fill-[#55dbe9]/70" />
          </g>
        );
      })}
      <DrawnPath d={`M${x - 10} 500h122l17 14h-153z M${x - 1} 514v12m103-12v12`} delay={delay + 0.3} />
      <DrawnPath d={`M${x + 51} 300c18 0 31 13 31 31s-13 31-31 31-31-13-31-31 13-31 31-31zm0 7c14 0 24 10 24 24s-10 24-24 24-24-10-24-24 10-24 24-24z`} delay={delay + 0.2} className="opacity-65" />
    </motion.g>
  );
}

function MovingHead({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: -7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease }}
      className="fill-none stroke-[#62e3f0]"
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
    >
      <DrawnPath d={`M${x - 14} ${y}h28l5 12-3 18h-30l-3-18z M${x - 17} ${y + 14}h34 M${x - 12} ${y + 30}l-11 9v7h46v-7l-11-9 M${x - 19} ${y + 46}v7m38-7v7`} delay={delay} />
      <DrawnPath d={`M${x - 8} ${y + 4}h16l4 9-3 5h-18l-3-5z`} delay={delay + 0.1} className="opacity-70" />
      <path d={`M${x} ${y + 19}v9`} className="stroke-[#62e3f0]/45" />
    </motion.g>
  );
}

function FlightCase({ x, y, width, height, delay }: { x: number; y: number; width: number; height: number; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease }}
      className="fill-none stroke-[#47cadd]/80"
      strokeWidth="1.05"
      vectorEffect="non-scaling-stroke"
    >
      <DrawnPath d={`M${x} ${y}h${width}v${height}h-${width}z M${x + 7} ${y + 7}h${width - 14}v${height - 14}h-${width - 14}z M${x + width / 2} ${y + 8}v${height - 16} M${x + 10} ${y + 20}h8v12h-8z M${x + width - 18} ${y + 20}h8v12h-8z M${x + 10} ${y + height - 24}h8v12h-8z M${x + width - 18} ${y + height - 24}h8v12h-8z`} delay={delay} />
      <DrawnPath d={`M${x + width / 2 - 10} ${y + 4}h20v3h-20z M${x + 11} ${y + height}v6m${width - 22} -6v6`} delay={delay + 0.12} className="opacity-65" />
    </motion.g>
  );
}

export function StructureBlueprint() {
  return (
    <svg
      viewBox="0 0 1400 590"
      role="img"
      aria-label="Diagrama técnico em wireframe de uma estrutura de DJ com som, iluminação e cabeamento"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      <defs>
        <linearGradient id="structure-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#43d5e8" stopOpacity=".16" />
          <stop offset="1" stopColor="#43d5e8" stopOpacity="0" />
        </linearGradient>
        <pattern id="structure-floor-grid" width="38" height="22" patternUnits="userSpaceOnUse">
          <path d="M38 0H0V22" stroke="#2ca9bd" strokeOpacity=".22" strokeWidth=".7" />
        </pattern>
      </defs>

      {/* blueprint datum and perspective floor */}
      <g className="stroke-[#238fa4]/30" strokeWidth=".8" vectorEffect="non-scaling-stroke">
        {[50, 110, 170, 230, 290, 350, 410, 470, 530].map((y) => <path key={y} d={`M44 ${y}H1356`} />)}
        {[90, 190, 290, 390, 490, 590, 690, 790, 890, 990, 1090, 1190, 1290].map((x) => <path key={x} d={`M${x} 30V536`} />)}
      </g>
      <motion.path
        d="M52 476H1348L1228 548H172Z"
        fill="url(#structure-floor-grid)"
        stroke="#4dd6e5"
        strokeOpacity=".68"
        strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.6, ease }}
        vectorEffect="non-scaling-stroke"
      />
      <g className="stroke-[#53d9e8]/40" strokeWidth=".9" vectorEffect="non-scaling-stroke">
        {[220, 360, 500, 640, 780, 920, 1060, 1200].map((x) => <path key={x} d={`M700 476L${x} 548`} />)}
        <path d="M120 499H1280M152 520H1248M228 544H1172" />
      </g>

      {/* wash beams, deliberately faint */}
      <g fill="url(#structure-beam)" opacity=".52">
        <path d="M420 120L275 472h270z" />
        <path d="M555 120L470 472h185z" />
        <path d="M700 120L640 472h120z" />
        <path d="M845 120L745 472h205z" />
        <path d="M980 120L870 472h245z" />
      </g>

      {/* truss columns and upper lighting rig */}
      <g className="fill-none stroke-[#56deeb]" strokeWidth="1.35" vectorEffect="non-scaling-stroke">
        <DrawnPath d="M250 96h45v382h-45z M260 96v382m25-382v382 M250 126h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45" delay={0.2} />
        <DrawnPath d="M1105 96h45v382h-45z M1115 96v382m25-382v382 M1105 126h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45m-45 32h45" delay={0.26} />
        <DrawnPath d="M270 104H1128v54H270z M282 116h834v30H282z M270 104l24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54m40-54 24 54 M294 104l-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54m64-54-24 54" delay={0.34} />
        <DrawnPath d="M230 478H1165M244 466H1153" delay={0.45} className="opacity-65" />
      </g>

      {/* rig hangers and moving heads */}
      {[372, 486, 600, 714, 828, 942, 1056].map((x, index) => (
        <g key={x} className="stroke-[#5fdfeb]" strokeWidth="1.1" vectorEffect="non-scaling-stroke">
          <DrawnPath d={`M${x} 157v11m-5 0h10`} delay={0.52 + index * 0.05} />
          <MovingHead x={x} y={169} delay={0.65 + index * 0.06} />
        </g>
      ))}

      {/* PA towers */}
      <SpeakerStack x={326} delay={0.75} />
      <SpeakerStack x={928} delay={0.9} />

      {/* auxiliary speakers and floor monitors */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 1 }} className="fill-none stroke-[#50d8e7]/80" strokeWidth="1.1" vectorEffect="non-scaling-stroke">
        <DrawnPath d="M448 320h56v70h-56z M455 327h42v56h-42z M476 335c12 0 17 8 17 17s-5 17-17 17-17-8-17-17 5-17 17-17z M465 400h-29v18h45v-18z M807 321h57v70h-57z M814 328h43v56h-43z M835 336c12 0 17 8 17 17s-5 17-17 17-17-8-17-17 5-17 17-17z M818 400h-27v18h45v-18z" delay={1} />
        <DrawnPath d="M574 454l68-18 18 23-71 21z M744 458l60-23 20 22-63 25z" delay={1.05} className="opacity-70" />
      </motion.g>

      {/* DJ table, controller and decks */}
      <motion.g initial={{ opacity: 0, y: 7 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 1.05, ease }} className="fill-none stroke-[#6be4ef]" strokeWidth="1.3" vectorEffect="non-scaling-stroke">
        <DrawnPath d="M550 359l75-22h232l78 22v94H550z M550 359h385m-385 14h385m-375-7v73m367-73v73 M582 453v20m320-20v20m-320 0h320" delay={1.05} />
        <DrawnPath d="M605 343v-14l12-9h72l11 9v14z M710 343v-14l12-9h72l11 9v14z M815 343v-14l12-9h13v23z" delay={1.2} />
        <DrawnPath d="M622 327c14 0 21 5 21 12s-7 12-21 12-21-5-21-12 7-12 21-12zm106 0c14 0 21 5 21 12s-7 12-21 12-21-5-21-12 7-12 21-12z M664 331v12m18-12v12m72-12v12m18-12v12m57-10v8m16-8v8" delay={1.28} className="opacity-80" />
        <DrawnPath d="M574 368h58v25h-58z M646 368h65v25h-65z M724 368h61v25h-61z M798 368h61v25h-61z M870 368h49v25h-49z M584 402h39v34h-39z M634 402h33v34h-33z M682 402h38v34h-38z M735 402h35v34h-35z M784 402h38v34h-38z M837 402h69v34h-69z" delay={1.34} />
        <DrawnPath d="M593 374h20m-20 7h20m48-7h33m-33 7h33m46-7h28m-28 7h28m43-7h28m-28 7h28m47-7h34m-34 7h34 M594 409h20m20 0h12m61 0h15m-15 9h15m52-9h13m-13 9h13m60-9h30" delay={1.43} className="opacity-65" />
        {[643, 674, 772, 804].map((x) => <circle key={x} cx={x} cy="418" r="2.1" className="fill-[#65e4ef]/80" />)}
      </motion.g>

      {/* flight cases and small rack units */}
      <FlightCase x={288} y={430} width={72} height={48} delay={1.2} />
      <FlightCase x={386} y={437} width={51} height={41} delay={1.26} />
      <FlightCase x={892} y={430} width={68} height={48} delay={1.3} />
      <FlightCase x={1015} y={435} width={70} height={43} delay={1.34} />
      <FlightCase x={1090} y={440} width={44} height={38} delay={1.4} />

      {/* signal, power and audio cable runs */}
      <g className="fill-none stroke-[#4ed9e8]/65" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <DrawnPath d="M375 477c35 3 34 36 77 36s40-35 84-35m-117 0c14 20 25 20 41 22m442-22c41 0 39 35 81 35s45-35 92-36m-122 0c14 22 26 23 42 24 M443 417c-40 22-47 39-70 58m-14-1c27-45 46-47 78-60m455 1c38 21 47 41 73 61m8-1c-18-40-40-48-75-63 M700 453v38c0 13 20 13 32 13h59" delay={1.2} />
      </g>

      {/* measurement ticks and callout leaders */}
      <g className="fill-none stroke-[#65e1ed]/70" strokeWidth=".9" vectorEffect="non-scaling-stroke">
        <DrawnPath d="M212 104v374m-7-374h14m-14 374h14m-19-186h24 M1190 104v374m-7-374h14m-14 374h14m-19-186h24 M270 82h858m-858-7v14m858-14v14 M250 540h900m-900-6v12m900-12v12" delay={0.5} />
        <DrawnPath d="M303 250h-94l-32 32h-43 M1030 248h97l37 33h61 M764 312l48-42h100 M704 493l-35 35H598" delay={1.1} />
        <path d="M193 100l10 4-10 4m997-8-10 4 10 4M266 535l4 10 4-10m850 0 4 10 4-10" />
      </g>
      <g className="font-mono text-[10px] uppercase tracking-[.18em]" fill="#79e5ef">
        <motion.text x="125" y="247" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>01 <tspan x="125" dy="15" fill="#d6f8fb">SOM</tspan></motion.text>
        <motion.text x="655" y="49" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}>02 <tspan x="655" dy="15" fill="#d6f8fb">ILUMINAÇÃO</tspan></motion.text>
        <motion.text x="808" y="285" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.45 }}>03 <tspan x="808" dy="15" fill="#d6f8fb">DJ SET</tspan></motion.text>
        <motion.text x="1250" y="280" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.55 }}>04 <tspan x="1250" dy="15" fill="#d6f8fb">ENERGIA</tspan></motion.text>
        <motion.text x="575" y="560" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.65 }}>05 <tspan x="600" dy="0" fill="#d6f8fb">SINAL / CABOS</tspan></motion.text>
      </g>
      <g className="fill-[#d7f7fa]/65 font-mono text-[8px] tracking-[.14em]">
        <text x="176" y="298">3.0 M</text>
        <text x="1198" y="298">3.0 M</text>
        <text x="1110" y="533">6.0 M</text>
        <text x="930" y="86">ESTRUTURA / TRELIÇA</text>
      </g>
      <g className="fill-[#65e1ed]/70">
        {[[212, 104], [212, 478], [1190, 104], [1190, 478], [700, 104], [700, 478]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="2.2" />)}
      </g>
    </svg>
  );
}
