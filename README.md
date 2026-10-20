# Rajeev Sharma — Portfolio

Personal portfolio website showcasing my work and background across software engineering, backend development, data, AI/ML, and technical R&D.

**Live website:** [rajeev-dev.vercel.app](https://rajeev-dev.vercel.app)

[![Portfolio CI](https://github.com/Rjsharma95/rajeevsharma-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Rjsharma95/rajeevsharma-portfolio/actions/workflows/ci.yml)

---

## About

I am a Computational Engineering Science graduate from Technische Universität Berlin with hands-on R&D experience spanning Java, Python, Linux-based systems, hardware/software interfaces, data processing, signal processing, and machine learning.

My professional and academic work has included:

- Java development under Linux and Raspberry Pi
- UART and SPI communication and interface analysis
- Byte-level SPI data reconstruction and structured JSON conversion
- Publish/subscribe software development
- JUnit testing and remote JVM debugging
- Python and MATLAB processing of biomedical sensor data
- CNN-based signal-quality classification with TensorFlow/Keras
- Quantisation and adaptation of a CNN for the BrainChip Akida environment
- React-based frontend development
- Backend development with Java and Spring Boot
- Automated testing and CI/CD workflows

The portfolio is intended to provide a practical overview of the software, data, AI/ML, and engineering work I have completed and continue to develop.

---

## Tech Stack

The portfolio itself is built with:

- **React**
- **JavaScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **React Icons**
- **EmailJS**
- **Git**
- **GitHub**
- **GitHub Actions**
- **Vercel**

---

## CI/CD

The repository uses GitHub Actions for continuous integration.

For pushes and pull requests, the CI workflow automatically:

1. Checks out the repository
2. Configures Node.js
3. Installs dependencies using `npm ci`
4. Runs the linter
5. Creates a production build

Vercel is connected to the GitHub repository and provides preview deployments for development changes and automatic production deployment from the main branch.

---

## Portfolio Sections

The website includes:

- **Hero** — introduction and current professional focus
- **About** — background and engineering mindset
- **Skills** — programming, backend, data/AI, systems, testing, DevOps, cloud, and engineering technologies
- **Experience** — professional R&D experience and employment timeline
- **Bachelor Thesis** — biomedical signal-quality analysis, CNN development, quantisation, and Akida runtime evaluation
- **Projects** — selected software, backend, data, and engineering projects
- **References** — approved professional reference
- **Contact** — contact form and professional links

---

## Featured Work

### Bachelor Thesis

**Signal Quality Analysis of Medical Sensor Signals Using Neural Networks and Implementation on a Neuromorphic Chip**

My bachelor thesis was completed at Technische Universität Berlin in cooperation with SectorCon.

The work covered an end-to-end workflow including:

- real pulse-wave signal acquisition
- filtering and preprocessing
- segmentation and normalisation
- statistical and time-frequency analysis
- Continuous Wavelet Transform (CWT)
- CNN development with TensorFlow/Keras
- model evaluation and threshold analysis
- model quantisation
- quantisation-aware fine-tuning
- conversion to an Akida-compatible model
- evaluation using the Akida Runtime with a CPU host

The final Akida-compatible model achieved **79.53% test accuracy** after quantisation-aware fine-tuning.

The portfolio includes selected thesis figures, the implemented CNN architecture, and model-performance results.

---

### Sensor-to-Cloud Platform

An ongoing Java backend project for ingesting, storing, and managing biomedical sensor readings using replayed pulse-wave data as simulated device telemetry.

Current implementation includes:

- Java
- Spring Boot
- RESTful CRUD API
- PostgreSQL
- JPA / Hibernate
- JUnit
- Testcontainers
- GitHub Actions CI

The project is being developed as a practical backend-engineering project with a focus on testing, persistence, API development, and automated delivery workflows.

---

### Personal Portfolio Website

This repository is itself one of my software projects.

It has given me practical experience with:

- reusable React components
- responsive layouts
- UI interaction
- form handling with EmailJS
- Git and GitHub workflows
- feature branches and pull requests
- automated linting and builds
- GitHub Actions
- Vercel preview deployments
- production deployment

---

### Data Analytics with R

University data-analysis project focused on manufacturing, vehicle, mileage, lifetime, and damage-case data for an automatic gearshift system.

Work included:

- data cleaning and transformation
- joining multiple datasets
- statistical analysis
- failure-pattern investigation
- interactive analytical visualisation
- R Shiny dashboards

Technologies included R, R Markdown, dplyr, tidyr, Shiny, and Plotly.

---

### Autonomous Mobile Cleaning Robot

Solo engineering project for the conceptual design of an autonomous mobile cleaning robot.

The project covered:

- mechanical and system design
- differential-drive selection
- LiDAR sensing
- Raspberry Pi-based control concept
- route and coverage planning
- battery sizing
- cleaning-system design
- safety requirements
- engineering calculations

Technical documentation is available directly through the portfolio.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Rjsharma95/rajeevsharma-portfolio.git