import React, { useMemo, useState, useEffect } from 'react';
import { normalizeData } from './data/normalizeData';
import { paginate } from './engine/paginate';
import SingleColumnPage from './templates/singleColumn/Page';
import TwoColumnPage from './templates/twoColumn/Page';
import { singleColumnConfig } from './templates/singleColumn/templateConfig';
import { twoColumnConfig } from './templates/twoColumn/templateConfig';
//can add more data in each filed to see
const resumeResponse = {
    "resume_data": {
        "achievements": [
            "Won the Hackathon organized by the Department of Telecommunications in the name of 5G Hackathon, participating as a team in the field of aggregate with the product name Cropy."
        ],
        "address": "Bangalore, India",
        "certifications": [],
        "designation": "AI Engineer",
        "education": [
            {
                "degree": "Bachelor of Technology",
                "details": "",
                "institution": "Karunya Institute of Technology and Sciences",
                "year": "2020"
            }
        ],
        "email": "sarveshagrawal.work@gmail.com",
        "experience": [
            {
                "company": "United Airlines",
                "description": [
                    "Designed and implemented an end-to-end AI streaming pipeline utilizing a Producer–Consumer architecture for real-time video analytics in airport gate monitoring with AWS Kinesis Video Streams.",
                    "Developed the Producer application to ingest multi-camera RTSP feeds, inject metadata, and stream live video to KVS, incorporating FastAPI-based health checks and automated error notifications.",
                    "Engineered an MLOps-ready inference pipeline that persisted structured detection outputs to Amazon Redshift, achieving sub-second inference-to-storage latency.",
                    "Containerized both producer and consumer modules using Docker, deploying on AWS EKS with Helm charts and Horizontal Pod Autoscaler for enhanced scalability.", "Designed and implemented an end-to-end AI streaming pipeline utilizing a Producer–Consumer architecture for real-time video analytics in airport gate monitoring with AWS Kinesis Video Streams.",
                    "Developed the Producer application to ingest multi-camera RTSP feeds, inject metadata, and stream live video to KVS, incorporating FastAPI-based health checks and automated error notifications.",
                    "Engineered an MLOps-ready inference pipeline that persisted structured detection outputs to Amazon Redshift, achieving sub-second inference-to-storage latency.",
                    "Containerized both producer and consumer modules using Docker, deploying on AWS EKS with Helm charts and Horizontal Pod Autoscaler for enhanced scalability."
                ],
                "duration": "April 2025 – November 2025",
                "position": "GenAI Engineer"
            },
            {
                "company": "Freelancing",
                "description": [
                    "Spearheaded the development of a state-of-the-art Retrieval-Augmented Generation (RAG) platform to enhance document interaction and data analysis for startups.",
                    "Integrated advanced NLP and API capabilities within the platform's Document Query Channel, enabling real-time user interaction with documents.",
                    "Engineered an Analytics Channel that dynamically converts user queries into SQL commands, generating visual graphs and actionable insights.",
                    "Implemented robust safeguards and validation mechanisms to ensure data integrity and compliance with stringent policy requirements."
                ],
                "duration": "January 2024 – March 2025",
                "position": "AI Engineer"
            },
            {
                "company": "CogniFirst",
                "description": [
                    "Implemented the MemSeg paper for anomaly detection, achieving 93% accuracy through effective segmentation and detection.",
                    "Developed a document classifier using an SVM algorithm, successfully classifying documents into various categories with 95% accuracy.",
                    "Designed and executed a deep learning workflow for signature detection and verification, utilizing GAN for signature cleaning and Siamese networks for verification.",
                    "Optimized and improved LLM token usage and output reliability across various generative AI use cases.",

                ],
                "duration": "September 2022 – January 2024",
                "position": "AI Engineer"
            },
            {
                "company": "Blackstraw.ai",
                "description": [
                    "Designed and developed innovative solutions for object detection, tracking, segmentation, and image classification using advanced algorithms.",
                    "Enhanced object detection accuracy from 80% to 97% through perimeter tuning and optimization techniques.",
                    "Established scalable and reproducible automated processes for large-scale data collection, analysis, and model implementation.",
                    "Produced CNN models and cutting-edge deep learning algorithms to address complex business challenges."
                ],
                "duration": "August 2021 – August 2022",
                "position": "Data Scientist"
            },
            {
                "company": "CrowdANALYTIX",
                "description": [
                    "Designed and deployed a cost-efficient ML/DL pipeline architecture using TensorFlow, Keras, and OpenCV, achieving remarkable latency.",
                    "Created multiple Zen applications with zero latency and downtime, ensuring high availability and reliability.",
                    "Developed backend applications to deploy models and perform various image processing tasks efficiently."
                ],
                "duration": "August 2020 – August 2021",
                "position": "Associate Software Engineer (AI Frameworks)"
            }
        ],
        "github": "https://github.com/Sarvesh1523",
        "linkedin": "https://www.linkedin.com/in/sarvesh1523/",
        "name": "Sarvesh Agrawal",
        "phone": "9952168340",
        "projects": [
            {
                "description": [
                    "Developed a system to identify human activities in real-time using OpenPose network for spatial location of key body joints.",
                    "Trained a model to classify five different human activities with 99% accuracy using SVM."
                ],
                "name": "Human Activity Recognition",
                "technologies": ["Deep Learning", "Python", "TensorFlow", "Scikit-Learn", "OpenCV"]
            },
            {
                "description": [
                    "Created a pix2pix image translation using GAN to convert rough concept sketches to presentation sketches.",
                    "Implemented weighted MSE loss for optimal model performance, increasing accuracy from 75% to 93%."
                ],
                "name": "Image-to-Image Translation",
                "technologies": ["Deep Learning", "GAN", "Python", "PyTorch", "OpenCV"]
            },
            {
                "description": [
                    "Executed a three-phase project for object detection, achieving 90% accuracy in extracting document attributes using Tesseract OCR.",
                    "Implemented preprocessing steps for image enhancement and attribute extraction using Regex."
                ],
                "name": "IRead",
                "technologies": ["Deep Learning", "Python", "TensorFlow", "OpenCV", "Django", "Celery", "Tesseract"]
            },
            {
                "description": [
                    "Classified Dutch documents based on names for database operations, achieving 97% accuracy using Google Cloud AutoML."
                ],
                "name": "Dutch Pdf Classification",
                "technologies": ["Deep Learning", "Python", "Flask", "Google Cloud Vision", "Google Cloud AutoML"]
            },
            {
                "description": [
                    "Developed a deep learning model to detect viruses in tomato leaves and an object detection model for assessing tomato quality.",
                    "Achieved 97% accuracy and deployed the project on AWS using Flask."
                ],
                "name": "Tomato Virus Classification and Detection",
                "technologies": ["Deep Learning", "Python", "Flask", "TensorFlow", "YOLO", "AWS"]
            },
            {
                "description": [
                    "Implemented DevOps concepts to automate hyper-parameter tuning for deep learning models using Jenkins and Docker.",
                    "Achieved 90% model accuracy through multiple iterations without human intervention."
                ],
                "name": "Automation in AI",
                "technologies": ["Deep Learning", "DevOps", "Python", "Keras", "Docker", "Jenkins"]
            }
        ],
        "publications": [
            {
                "details": "",
                "title": "Early Detection of ADHD in Juveniles using recurrent neural networks",
                "venue": "IEEE"
            },
            {
                "details": "",
                "title": "Health Risk Detection through web app using Machine Learning",
                "venue": "IEEE Conference Paper"
            }
        ],
        "skills": [
            "Deep Learning",
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "AWS Services",
            "Data Analysis"
        ],
        "summary": "AI Engineer and Data Scientist with 5 years of expertise in developing cutting-edge AI solutions, including Retrieval-Augmented Generation (RAG) platforms and Large Language Models (LLMs). Skilled in deep learning, NLP, computer vision, and scalable AI system deployment. Proven ability to innovate with LLMs, vector databases, and advanced data-driven techniques to enhance decision-making and automation. Published researcher and 5G Hackathon winner, committed to advancing AI technologies to solve complex challenges."
    },
    "success": true,
    "template_id": 1
};

const appStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #e8eaf0; }

  .app-shell {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 24px;
    font-family: 'Inter', sans-serif;
  }

  .template-section {
    max-width: 900px;
    margin: 0 auto 60px;
  }

  .template-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: rgba(255,255,255,0.6);
    margin-bottom: 16px;
    padding-left: 4px;
  }

  .template-title {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 24px;
    padding-left: 4px;
  }

  .page-wrapper {
    margin-bottom: 24px;
    position: relative;
  }

  .page-number {
    position: absolute;
    top: -22px;
    right: 0;
    font-size: 11px;
    color: rgba(255,255,255,0.5);
    font-weight: 500;
  }

  .divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.15);
    margin: 60px 0;
  }
`;

export default function App() {
    // Wait for fonts to load before measuring
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });
    }, []);

    // Normalize resume data into flat blocks and memoize it using usememo hook 
    //optimization
    const blocks = useMemo(() => normalizeData(resumeResponse), []);

    // Paginate separately per template as each template has its own config

    const singleColumnPages = useMemo(
        () => fontsLoaded ? paginate(blocks, singleColumnConfig) : [],
        [blocks, fontsLoaded]
    );
    const twoColumnPages = useMemo(
        () => fontsLoaded ? paginate(blocks, twoColumnConfig) : [],
        [blocks, fontsLoaded]
    );

    if (!fontsLoaded) {
        return <div style={{ color: '#fff', padding: '40px', textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <>
            {/* loading two pages together */}
            <style>{appStyles}</style>
            <div className="app-shell">

                {/* ── SINGLE COLUMN TEMPLATE ── */}
                <div className="template-section">
                    <div className="template-label">Template 1</div>
                    <div className="template-title">Single Column</div>
                    {singleColumnPages.map((pageBlocks, i) => (
                        <div key={i} className="page-wrapper">
                            <div className="page-number">Page {i + 1} of {singleColumnPages.length}</div>
                            <SingleColumnPage blocks={pageBlocks} pageNumber={i + 1} />
                        </div>
                    ))}
                </div>

                <hr className="divider" />

                {/* ── TWO COLUMN TEMPLATE ── */}
                <div className="template-section">
                    <div className="template-label">Template 2</div>
                    <div className="template-title">Two Column</div>
                    {twoColumnPages.map((pageBlocks, i) => (
                        <div key={i} className="page-wrapper">
                            <div className="page-number">Page {i + 1} of {twoColumnPages.length}</div>
                            <TwoColumnPage blocks={pageBlocks} pageNumber={i + 1} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
