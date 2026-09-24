import {
  Download,
  FileText,
} from "lucide-react"


export const CVActionButton = ({
  href = "/Rajeev_Sharma_CV.pdf",
}) => {
  return (
    <div
      className="
        relative
        bg-transparent
        border
        border-border
        text-foreground
        hover:border-primary/50
        transition-all
        duration-1000

        focus-within:ring-2
        focus-within:ring-primary
        focus-within:ring-offset-2

        group

        text-lg
        font-medium
        rounded-full
        overflow-visible
        animated-border

        inline-flex
        items-stretch
      "
    >

      {/* =====================================================
          ANIMATED BORDER
          Same effect as AnimatedBorderButton
          ===================================================== */}

      <svg
        className="
          absolute
          left-0
          top-0
          w-full
          h-full
          pointer-events-none
          download-cv-border
        "
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{
          overflow: "visible",
        }}
        aria-hidden="true"
      >

        <path
          d="
            M 30,1
            A 29,29 0 0 0 1,30
            L 1,30
            A 29,29 0 0 0 30,59
            L 170,59
            A 29,29 0 0 0 199,30
            L 199,30
            A 29,29 0 0 0 170,1
            Z
          "
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />

      </svg>



      {/* =====================================================
          VIEW CV
          ===================================================== */}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Rajeev Sharma CV"
        className="
          relative
          z-10

          inline-flex
          items-center
          justify-center
          gap-2

          pl-7
          pr-5
          py-4

          rounded-l-full

          text-foreground

          hover:text-primary

          transition-colors
          duration-300
        "
      >

        <FileText
          className="
            w-5
            h-5
            text-primary
          "
        />

        <span>
          View CV
        </span>

      </a>



      {/* =====================================================
          DIVIDER
          ===================================================== */}

      <div
        className="
          relative
          z-10

          w-px
          my-3

          bg-border

          group-hover:bg-primary/30

          transition-colors
          duration-300
        "
      />



      {/* =====================================================
          DOWNLOAD CV
          ===================================================== */}

      <a
        href={href}
        download
        aria-label="Download Rajeev Sharma CV"
        title="Download CV"
        className="
          relative
          z-10

          inline-flex
          items-center
          justify-center

          px-5
          py-4

          rounded-r-full

          text-muted-foreground

          hover:text-primary
          hover:bg-primary/10

          transition-all
          duration-300
        "
      >

        <Download className="w-5 h-5" />

      </a>

    </div>
  )
}