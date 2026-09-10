export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Engineering grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Teal glow */}
      <div
        className="
          absolute
          top-[10%]
          left-[5%]
          w-[450px]
          h-[450px]
          rounded-full
          bg-primary/15
          blur-[130px]
        "
      />

      {/* Orange highlight */}
      <div
        className="
          absolute
          bottom-[5%]
          right-[5%]
          w-[300px]
          h-[300px]
          rounded-full
          bg-highlight/10
          blur-[120px]
        "
      />

      {/* Signal waveform */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30">
        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          className="w-full h-[220px]"
        >
          <defs>
            <linearGradient
              id="signalGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />

              <stop
                offset="30%"
                stopColor="var(--color-primary)"
                stopOpacity="0.8"
              />

              <stop
                offset="70%"
                stopColor="var(--color-primary)"
                stopOpacity="0.8"
              />

              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            className="signal-path"
            d="
              M0 110
              L110 110
              L150 108
              L180 115
              L210 105
              L240 110
              L300 110

              C320 110 330 100 340 75
              C350 45 360 170 380 110

              L440 110
              L470 107
              L500 115
              L530 102
              L560 110
              L650 110

              C670 110 680 95 690 65
              C700 35 715 185 735 110

              L820 110
              L850 107
              L880 115
              L910 105
              L940 110

              L1200 110
            "
            fill="none"
            stroke="url(#signalGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Fade into background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

    </div>
  )
}