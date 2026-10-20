import {
  Activity,
  BrainCircuit,
  Cpu,
  Database,
  FileText,
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
      "Collected real pulse-wave measurements using a piezoelectric finger sensor and LabVIEW at 250 Hz as the basis for the signal-quality analysis workflow.",
  },

  {
    icon: Waves,
    title: "Preprocessing",
    description:
      "Processed noisy sensor signals using FIR filtering, segmentation, Z-score normalization, statistical features, and time-frequency analysis with CWT and STFT.",
  },

  {
    icon: Database,
    title: "Feature Engineering",
    description:
      "Extracted statistical, time-domain, and frequency-domain features and prepared consistent datasets for classical analysis and deep-learning approaches.",
  },

  {
    icon: BrainCircuit,
    title: "CNN Classification",
    description:
      "Designed and iteratively improved TensorFlow/Keras CNN models for biomedical signal-quality classification and class-imbalance handling.",
  },

  {
    icon: Gauge,
    title: "Model Evaluation",
    description:
      "Evaluated model performance using accuracy, precision, recall, F1 score, ROC/AUC, confusion matrices, and threshold analysis.",
  },

  {
    icon: Cpu,
    title: "Akida Adaptation",
    description:
      "Quantised and converted the CNN for BrainChip Akida compatibility, fine-tuned the quantised model, and evaluated it in the Akida runtime using a CPU host.",
  },
]


const thesisResults = [
  {
    label: "Before Quantisation",
    value: "81.49%",
    description: "Conv2D test accuracy",
  },

  {
    label: "After 8-4-4 Quantisation",
    value: "67.63%",
    description: "Accuracy immediately after quantisation",
  },

  {
    label: "After QAT Fine-Tuning",
    value: "79.53%",
    description: "Akida runtime evaluation on CPU host",
  },
]


const thesisImages = [
  {
    title: "Signal Processing",
    description:
      "Comparison of the original pulse-wave signal with the signal after applying a 30 Hz FIR low-pass filter.",
    src: "/thesis/signal-processing.png",
    alt: "Original and FIR-filtered pulse-wave signal",
  },

  {
    title: "Signal Classification",
    description:
      "Representative good and motion-artefact-contaminated pulse-wave segments used to illustrate the signal-quality classification problem.",
    src: "/thesis/signal-classification.png",
    alt: "Comparison of good and motion-artefact-contaminated pulse-wave segments",
  },

  {
    title: "Model Evaluation",
    description:
      "ROC evaluation of the Conv2D CNN, with an AUC of 0.8885 and peak test accuracy of 81.49%.",
    src: "/thesis/model-evaluation.png",
    alt: "ROC curve showing evaluation of the Conv2D CNN model",
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

      {/* =====================================================
          BACKGROUND EFFECTS
          ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-1/4
            -left-32
            w-96
            h-96
            bg-primary/5
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            right-0
            w-96
            h-96
            bg-highlight/5
            rounded-full
            blur-3xl
          "
        />

      </div>


      <div className="container mx-auto px-6 relative z-10">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div className="max-w-4xl mb-16">

          <span
            className="
              text-secondary-foreground
              text-sm
              font-medium
              tracking-wider
              uppercase
              animate-fade-in
            "
          >
            Bachelor Thesis
          </span>


          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              text-secondary-foreground
              animate-fade-in
              animation-delay-100
            "
          >
            From biomedical signals to{" "}

            <span className="font-serif italic font-normal text-white">
              intelligent classification.
            </span>

          </h2>


          <p
            className="
              text-muted-foreground
              max-w-3xl
              leading-relaxed
              animate-fade-in
              animation-delay-200
            "
          >
            My bachelor thesis combined signal processing, machine learning,
            software development, and neuromorphic AI in an end-to-end
            workflow for analysing the quality of real medical sensor signals.
          </p>

        </div>


        {/* =====================================================
            MAIN THESIS CARD
            ===================================================== */}

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

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-primary/10
                    border
                    border-primary/20
                    text-primary
                    text-xs
                    font-medium
                  "
                >
                  Grade 1.3
                </span>


                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-surface
                    border
                    border-border
                    text-muted-foreground
                    text-xs
                    font-medium
                  "
                >
                  03/2025 - 07/2025
                </span>


                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-surface
                    border
                    border-border
                    text-muted-foreground
                    text-xs
                    font-medium
                  "
                >
                  TU Berlin
                </span>


                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-surface
                    border
                    border-border
                    text-muted-foreground
                    text-xs
                    font-medium
                  "
                >
                  SectorCon
                </span>

              </div>


              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  leading-snug
                  mb-5
                "
              >
                Signal Quality Analysis of Medical Sensor Signals Using
                Neural Networks and Implementation on a Neuromorphic Chip
              </h3>


              <p
                className="
                  text-muted-foreground
                  leading-relaxed
                  mb-5
                "
              >
                I independently planned and implemented an end-to-end
                workflow starting with real pulse-wave measurements and
                continuing through signal preprocessing, feature extraction,
                time-frequency analysis, CNN training, model evaluation,
                quantisation, and Akida-compatible conversion.
              </p>


              <p
                className="
                  text-muted-foreground
                  leading-relaxed
                "
              >
                A key engineering challenge was adapting the machine-learning
                approach to the constraints of the neuromorphic target
                environment. After quantisation reduced model performance,
                quantisation-aware fine-tuning recovered most of the lost
                accuracy before evaluation in the Akida runtime on a CPU host.
              </p>

            </div>


            {/* =================================================
                THESIS SUMMARY CARD
                ================================================= */}

            <div
              className="
                glass
                rounded-2xl
                p-6
                border
                border-border
              "
            >

              <h4 className="font-semibold text-lg mb-5">
                Thesis Focus
              </h4>


              <div className="space-y-4">

                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-muted-foreground
                      mb-1
                    "
                  >
                    Programming
                  </div>

                  <div className="font-medium">
                    Python · MATLAB
                  </div>

                </div>


                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-muted-foreground
                      mb-1
                    "
                  >
                    Machine Learning
                  </div>

                  <div className="font-medium">
                    TensorFlow / Keras · CNN
                  </div>

                </div>


                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-muted-foreground
                      mb-1
                    "
                  >
                    Signal Processing
                  </div>

                  <div className="font-medium">
                    FIR Filtering · CWT · STFT
                  </div>

                </div>


                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-muted-foreground
                      mb-1
                    "
                  >
                    Target Environment
                  </div>

                  <div className="font-medium">
                    BrainChip Akida · Runtime Simulation
                  </div>

                </div>


                <div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-muted-foreground
                      mb-1
                    "
                  >
                    Evaluation
                  </div>

                  <div className="font-medium">
                    Accuracy · F1 · ROC / AUC
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            MODEL RESULTS
            ===================================================== */}

        <div className="mb-20">

          <div className="mb-10">

            <span
              className="
                text-sm
                uppercase
                tracking-wider
                text-primary
              "
            >
              Model Results
            </span>


            <h3
              className="
                text-2xl
                md:text-3xl
                font-semibold
                mt-3
              "
            >
              Performance through Akida adaptation
            </h3>


            <p
              className="
                text-sm
                text-muted-foreground
                leading-relaxed
                max-w-2xl
                mt-3
              "
            >
              Quantisation initially reduced model performance, while
              quantisation-aware fine-tuning recovered most of the lost
              accuracy.
            </p>

          </div>


          <div
            className="
              grid
              md:grid-cols-3
              gap-6
            "
          >

            {thesisResults.map((result, index) => (

              <div
                key={result.label}
                className="
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
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-primary
                    mb-3
                  "
                >
                  {result.value}
                </div>


                <h4 className="font-semibold mb-2">
                  {result.label}
                </h4>


                <p
                  className="
                    text-sm
                    text-muted-foreground
                    leading-relaxed
                  "
                >
                  {result.description}
                </p>

              </div>

            ))}

          </div>


          {/* Akida clarification */}
          <p
            className="
              text-sm
              text-muted-foreground
              mt-5
              max-w-3xl
              leading-relaxed
            "
          >
            The final Akida-compatible model was evaluated using the Akida
            Runtime with a CPU host. Physical Akida hardware deployment was
            not completed during the thesis.
          </p>

        </div>


        {/* =====================================================
            TECHNICAL WORKFLOW
            ===================================================== */}

        <div className="mb-20">

          <div className="mb-10">

            <span
              className="
                text-sm
                uppercase
                tracking-wider
                text-primary
              "
            >
              Technical Workflow
            </span>


            <h3
              className="
                text-2xl
                md:text-3xl
                font-semibold
                mt-3
              "
            >
              From raw signals to neuromorphic AI
            </h3>

          </div>


          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

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


                  <p
                    className="
                      text-sm
                      text-muted-foreground
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                </div>

              )
            })}

          </div>

        </div>


        {/* =====================================================
            CNN ARCHITECTURE
            ===================================================== */}

        <div className="mb-20">

          <div className="mb-10">

            <span
              className="
                text-sm
                uppercase
                tracking-wider
                text-primary
              "
            >
              Model Architecture
            </span>


            <h3
              className="
                text-2xl
                md:text-3xl
                font-semibold
                mt-3
              "
            >
              CNN designed for signal-quality classification
            </h3>


            <p
              className="
                text-sm
                text-muted-foreground
                leading-relaxed
                max-w-3xl
                mt-3
              "
            >
              The final architecture used two Conv2D layers with 64 filters,
              Global Average Pooling, dropout for regularisation, a dense
              layer with 100 neurons, and a two-class Softmax output.
              The architecture was designed with Akida compatibility in mind.
            </p>

          </div>


          <figure
            className="
              glass
              rounded-3xl
              overflow-hidden
              border
              border-primary/30
              hover:border-primary/50
              transition-all
              duration-300
            "
          >

            <a
              href="/thesis/cnn-architecture.png"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-white
                p-4
                md:p-8
              "
              aria-label="Open CNN architecture image"
            >

              <img
                src="/thesis/cnn-architecture.png"
                alt="Architecture of the implemented Conv2D CNN for pulse-wave signal-quality classification"
                loading="lazy"
                className="
                  w-full
                  h-auto
                  object-contain
                "
              />

            </a>


            <figcaption
              className="
                p-6
                md:px-8
                border-t
                border-border
              "
            >

              <h4 className="font-semibold mb-2">
                Implemented Conv2D CNN
              </h4>


              <p
                className="
                  text-sm
                  text-muted-foreground
                  leading-relaxed
                "
              >
                Wavelet-transformed pulse-wave data passes through two
                Conv2D layers, Global Average Pooling, dropout and dense
                layers before binary classification into good and bad
                signal-quality segments.
              </p>

            </figcaption>

          </figure>

        </div>


        {/* =====================================================
            THESIS VISUALS
            ===================================================== */}

        <div className="mb-20">

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-4
              mb-10
            "
          >

            <div>

              <span
                className="
                  text-sm
                  uppercase
                  tracking-wider
                  text-primary
                "
              >
                Results & Visuals
              </span>


              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  mt-3
                "
              >
                Classification and analysis
              </h3>

            </div>


            <p
              className="
                text-sm
                text-muted-foreground
                max-w-md
              "
            >
              Selected figures from the signal-processing and model-evaluation
              workflow developed during the thesis.
            </p>

          </div>


          <div
            className="
              grid
              md:grid-cols-3
              gap-6
            "
          >

            {thesisImages.map((image) => (

              <figure
                key={image.title}
                className="
                  group
                  glass
                  rounded-2xl
                  overflow-hidden
                  border
                  border-border
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Image */}
                <a
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    relative
                    aspect-[4/3]
                    bg-white
                    overflow-hidden
                  "
                  aria-label={`Open ${image.title} figure`}
                >

                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-contain
                      group-hover:scale-[1.02]
                      transition-transform
                      duration-500
                    "
                  />

                </a>


                {/* Caption */}
                <figcaption className="p-5">

                  <h4 className="font-semibold mb-2">
                    {image.title}
                  </h4>


                  <p
                    className="
                      text-sm
                      text-muted-foreground
                      leading-relaxed
                    "
                  >
                    {image.description}
                  </p>

                </figcaption>

              </figure>

            ))}

          </div>

        </div>


        {/* =====================================================
            THESIS DOCUMENT
            ===================================================== */}

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


              <p
                className="
                  text-sm
                  text-muted-foreground
                  leading-relaxed
                  max-w-2xl
                "
              >
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