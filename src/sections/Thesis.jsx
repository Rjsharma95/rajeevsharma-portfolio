import {
  Activity,
  BrainCircuit,
  Cpu,
  Database,
  FileText,
  Images,
  LockKeyhole,
  ArrowUpRight,
  Waves,
  Gauge,
} from "lucide-react"


const workflow = [
  {
    icon: Activity,
    title: "Signal Acquisition",
    description:
      "Worked with real pulse-wave measurements as the basis for the signal-quality analysis workflow.",
  },
  {
    icon: Waves,
    title: "Preprocessing",
    description:
      "Prepared noisy sensor signals using FIR filtering, segmentation, Z-score normalization, statistical features, and wavelet-based analysis.",
  },
  {
    icon: Database,
    title: "Feature Engineering",
    description:
      "Converted raw measurements into consistent datasets suitable for classical analysis and deep-learning approaches.",
  },
  {
    icon: BrainCircuit,
    title: "CNN Classification",
    description:
      "Designed and iteratively improved a TensorFlow/Keras CNN for biomedical signal-quality classification.",
  },
  {
    icon: Gauge,
    title: "Model Evaluation",
    description:
      "Evaluated model performance using multiple classification metrics, including ROC/AUC, and compared handcrafted features with deep-learning approaches.",
  },
  {
    icon: Cpu,
    title: "Edge AI Adaptation",
    description:
      "Modified the model and processing workflow for compatibility with the resource-constrained BrainChip Akida neuromorphic environment.",
  },
]


const thesisImages = [
  {
    title: "Signal Classification",
    description:
      "Reserved for an approved example of the signal-quality classification results.",
    src: null,
    alt: "Signal classification result",
  },
  {
    title: "Model Evaluation",
    description:
      "Reserved for an approved evaluation plot such as ROC/AUC or classification metrics.",
    src: null,
    alt: "Model evaluation result",
  },
  {
    title: "Signal Processing",
    description:
      "Reserved for an approved example of preprocessing, wavelet analysis, or processed sensor signals.",
    src: null,
    alt: "Signal processing result",
  },
]


const thesisDocument = {
  available: false,
  href: null,
}


export const Thesis = () => {
  return (
    <section
      id="thesis"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      </div>


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-4xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Bachelor Thesis
          </span>


          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">

            From biomedical signals to{" "}

            <span className="font-serif italic font-normal text-white">
              intelligent classification.
            </span>

          </h2>


          <p className="text-muted-foreground max-w-3xl leading-relaxed animate-fade-in animation-delay-200">

            My bachelor thesis combined signal processing, machine learning,
            software development, and Edge AI in an end-to-end workflow for
            analysing the quality of real medical sensor signals.

          </p>

        </div>


        {/* Main Thesis Card */}
        <div
          className="
            glass
            rounded-3xl
            border
            border-primary/30
            p-8
            md:p-10
            glow-border
            mb-16
            animate-fade-in
            animation-delay-300
          "
        >

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10">

            {/* Thesis Information */}
            <div>

              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  Grade 1.3
                </span>

                <span className="px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground text-xs font-medium">
                  03/2025 - 07/2025
                </span>

                <span className="px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground text-xs font-medium">
                  TU Berlin
                </span>

                <span className="px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground text-xs font-medium">
                  SectorCon
                </span>

              </div>


              <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-5">

                Signal Quality Analysis of Medical Sensor Signals Using
                Neural Networks and Implementation on a Neuromorphic Chip

              </h3>


              <p className="text-muted-foreground leading-relaxed mb-5">

                I independently planned and implemented an end-to-end Python
                workflow starting with real pulse-wave measurements and
                continuing through preprocessing, feature engineering, model
                training, evaluation, and adaptation for Edge AI.

              </p>


              <p className="text-muted-foreground leading-relaxed">

                One of the main challenges was adapting the machine-learning
                approach when initial model and processing choices were not
                compatible with the resource-constrained neuromorphic target
                environment.

              </p>

            </div>


            {/* Thesis Summary Card */}
            <div className="glass rounded-2xl p-6 border border-border">

              <h4 className="font-semibold text-lg mb-5">
                Thesis Focus
              </h4>


              <div className="space-y-4">

                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Programming
                  </div>

                  <div className="font-medium">
                    Python
                  </div>
                </div>


                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Machine Learning
                  </div>

                  <div className="font-medium">
                    TensorFlow / Keras · CNN
                  </div>
                </div>


                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Signal Processing
                  </div>

                  <div className="font-medium">
                    Filtering · Segmentation · Wavelets
                  </div>
                </div>


                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Target Environment
                  </div>

                  <div className="font-medium">
                    BrainChip Akida · Edge AI
                  </div>
                </div>


                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Evaluation
                  </div>

                  <div className="font-medium">
                    Classification Metrics · ROC / AUC
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Workflow */}
        <div className="mb-20">

          <div className="mb-10">

            <span className="text-sm uppercase tracking-wider text-primary">
              Technical Workflow
            </span>

            <h3 className="text-2xl md:text-3xl font-semibold mt-3">
              From raw signals to Edge AI
            </h3>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {workflow.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="
                    group
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-border
                    hover:border-primary/40
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    animate-fade-in
                  "
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  }}
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-primary/10
                      flex
                      items-center
                      justify-center
                      mb-5
                      group-hover:bg-primary/20
                      transition-colors
                    "
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>


                  <h4 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h4>


                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>


        {/* Thesis Results / Image Gallery */}
        <div className="mb-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">

            <div>

              <span className="text-sm uppercase tracking-wider text-primary">
                Results & Visuals
              </span>


              <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                Classification and analysis
              </h3>

            </div>


            <p className="text-sm text-muted-foreground max-w-md">
              Selected thesis visuals will be added here after publication
              permission is confirmed.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {thesisImages.map((image) => (

              <div
                key={image.title}
                className="
                  group
                  glass
                  rounded-2xl
                  overflow-hidden
                  border
                  border-border
                  hover:border-primary/40
                  transition-all
                  duration-300
                "
              >

                {/* Image Area */}
                <div className="relative aspect-[4/3] bg-surface overflow-hidden">

                  {image.src ? (

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                      "
                    />

                  ) : (

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-primary/10
                          border
                          border-primary/20
                          flex
                          items-center
                          justify-center
                          mb-4
                        "
                      >
                        <Images className="w-6 h-6 text-primary" />
                      </div>


                      <span className="text-sm text-muted-foreground">
                        Visual reserved
                      </span>

                    </div>

                  )}

                </div>


                {/* Caption */}
                <div className="p-5">

                  <h4 className="font-semibold mb-2">
                    {image.title}
                  </h4>


                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {image.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Thesis Document */}
        <div
          className="
            glass
            rounded-3xl
            border
            border-primary/30
            p-8
            md:p-10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-8
          "
        >

          <div className="flex items-start gap-5">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-primary/10
                border
                border-primary/20
                flex
                items-center
                justify-center
                flex-shrink-0
              "
            >
              <FileText className="w-7 h-7 text-primary" />
            </div>


            <div>

              <h3 className="text-xl font-semibold mb-2">
                Bachelor Thesis Document
              </h3>


              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">

                The complete thesis document can be made available here once
                permission for public publication has been confirmed.

              </p>

            </div>

          </div>


          {thesisDocument.available && thesisDocument.href ? (

            <a
              href={thesisDocument.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-primary
                text-primary-foreground
                font-medium
                hover:bg-primary/90
                transition-colors
                flex-shrink-0
              "
            >
              View Thesis

              <ArrowUpRight className="w-4 h-4" />
            </a>

          ) : (

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                bg-surface
                border
                border-border
                text-sm
                text-muted-foreground
                flex-shrink-0
              "
            >
              <LockKeyhole className="w-4 h-4" />

              Publication pending
            </div>

          )}

        </div>

      </div>
    </section>
  )
}