# React + Vite
# Rajeev Sharma — Portfolio

This is my personal portfolio website, built to present my background in software engineering, data, AI/ML, and technical R&D in a clear and practical way.

I created the site while transitioning from university and R&D work into a full-time software engineering role. Rather than using a ready-made portfolio template, I wanted to build something myself that reflects both my technical background and the kind of work I want to do next.

## Live Website

**Portfolio:** [rajeev-dev.vercel.app](https://rajeev-dev.vercel.app)

## About Me

I am a Computational Engineering graduate from Technische Universität Berlin with hands-on R&D experience in Python, Java, Linux-based systems, data processing, machine learning, signal processing, and embedded environments.

My work has included:

- Python pipelines for medical sensor data
- Java applications for SPI interface configuration and data conversion
- Linux and Raspberry Pi setup, debugging, and troubleshooting
- CNN-based biomedical signal-quality classification with TensorFlow/Keras
- Model adaptation for the BrainChip Akida neuromorphic environment
- Frontend development with React and Tailwind CSS

My goal is to continue growing as a software engineer while keeping the flexibility to work across backend, data, AI/ML, and engineering-focused software.

## Tech Stack

The portfolio itself is built with:

- **React**
- **JavaScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **React Icons**
- **EmailJS**
- **Git & GitHub**
- **Vercel**

## Portfolio Sections

The site includes:

- **Hero** — short introduction and current focus
- **About** — background and engineering mindset
- **Skills** — programming, backend, data/AI, systems, and cloud tools
- **Bachelor Thesis** — signal quality analysis using neural networks and Edge AI
- **Experience** — professional R&D and other work experience
- **Projects** — selected software, data, and engineering projects
- **Testimonials** — reserved for approved professional references
- **Contact** — direct contact form and professional links

## Featured Work

### Bachelor Thesis

**Signal Quality Analysis of Medical Sensor Signals Using Neural Networks and Implementation on a Neuromorphic Chip**

The project covered an end-to-end workflow from real pulse-wave acquisition and preprocessing to feature engineering, CNN training, evaluation, and adaptation for a neuromorphic target.

Main technologies included Python, TensorFlow/Keras, NumPy, SciPy, PyWavelets, and signal-processing methods such as filtering, segmentation, normalization, statistical features, and wavelet analysis.

### Personal Portfolio

This repository is also one of my current software projects. I used it to improve my React workflow, component structure, responsive design, UI interaction, Git workflow, and deployment process.

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/Rjsharma95/rajeevsharma-portfolio.git
```

Move into the project directory:

```bash
cd rajeevsharma-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Contact Form

The contact form uses EmailJS.

Environment variables should be stored locally and should not be committed to Git:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Current Status

The portfolio is actively being improved as I continue building new projects and expanding my software engineering skills.

Upcoming improvements may include:

- additional project case studies
- approved thesis visuals and documentation
- professional testimonials
- new backend / AI projects
- further accessibility and performance improvements

## Contact

**Rajeev Sharma**  
Berlin, Germany

- [LinkedIn](https://www.linkedin.com/in/rjsharma/)
- [GitHub](https://github.com/Rjsharma95)
- [Portfolio](https://rajeev-dev.vercel.app)

---

Thanks for taking a look at my work.


(This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.)
