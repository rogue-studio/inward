export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f1ea] px-6 text-[#161616]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent_58%)]" />

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center">
        <div className="mb-14 w-full max-w-[760px]">
          <svg viewBox="0 0 1200 220" className="h-auto w-full" aria-label="INWARD">
            <g
              fill="rgba(20,20,20,0.92)"
              fontFamily='Georgia, "Times New Roman", serif'
              fontSize="128"
            >
              <text x="305" y="140">
                I
              </text>
              <text x="375" y="150">
                N
              </text>
              <text x="495" y="150">
                W
              </text>
              <text x="625" y="150">
                A
              </text>
              <text x="730" y="150">
                R
              </text>
              <text x="840" y="150">
                D
              </text>
            </g>
          </svg>
        </div>

        <div className="w-full max-w-2xl opacity-85">
          <svg viewBox="0 0 1200 220" className="h-auto w-full">
            <g
              fill="none"
              stroke="rgba(25,25,25,0.78)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* ===== BLOCK 1 ===== */}
              <g transform="translate(0,0)">
                <path d="M60 120 L120 70 L180 120 L240 70 L300 120 L360 70" />
                <path d="M30 145 L90 95 L150 145 L210 95 L270 145 L330 95 L390 145" />
                <path d="M60 170 L120 120 L180 170 L240 120 L300 170 L360 120" />

                <path d="M60 120 L120 170 L180 120 L240 170 L300 120 L360 170" />
                <path d="M30 95 L90 145 L150 95 L210 145 L270 95 L330 145 L390 95" />
                <path d="M60 70 L120 120 L180 70 L240 120 L300 70 L360 120" />
              </g>

              {/* ===== BLOCK 2 ===== */}
              <g transform="translate(405,0)">
                <path d="M60 120 L120 70 L180 120 L240 70 L300 120 L360 70" />
                <path d="M30 145 L90 95 L150 145 L210 95 L270 145 L330 95 L390 145" />
                <path d="M60 170 L120 120 L180 170 L240 120 L300 170 L360 120" />

                <path d="M60 120 L120 170 L180 120 L240 170 L300 120 L360 170" />
                <path d="M30 95 L90 145 L150 95 L210 145 L270 95 L330 145 L390 95" />
                <path d="M60 70 L120 120 L180 70 L240 120 L300 70 L360 120" />
              </g>

              {/* ===== BLOCK 3 ===== */}
              <g transform="translate(810,0)">
                <path d="M60 120 L120 70 L180 120 L240 70 L300 120 L360 70" />
                <path d="M30 145 L90 95 L150 145 L210 95 L270 145 L330 95 L390 145" />
                <path d="M60 170 L120 120 L180 170 L240 120 L300 170 L360 120" />

                <path d="M60 120 L120 170 L180 120 L240 170 L300 120 L360 170" />
                <path d="M30 95 L90 145 L150 95 L210 145 L270 95 L330 145 L390 95" />
                <path d="M60 70 L120 120 L180 70 L240 120 L300 70 L360 120" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </main>
  );
}