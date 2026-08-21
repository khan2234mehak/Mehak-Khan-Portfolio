// Centralized project data. All URLs are real and provided by Mehak.
// Live demo is left null (and hidden/disabled in the UI) where none exists.

export const categories = [
  "All",
  "Full Stack",
  "AI",
  "ML",
  "Data Science",
  "Python",
  "Computer Vision",
];

export const projects = [
  {
    id: "pulseboard",
    index: "01",
    name: "Pulseboard",
    tagline: "Enterprise Project Management System",
    category: ["Full Stack"],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "SQLite", "Socket.IO", "JWT"],
    live: "https://pulseboard-ten-khaki.vercel.app",
    github: "https://github.com/khan2234mehak/project-management-system",
    overview:
      "Pulseboard is a full-stack project management platform built for teams that need real-time visibility into work as it moves — boards, tasks, and team activity kept in sync live across every connected client.",
    problem:
      "Teams coordinating on shared work often lose time to stale task boards and status updates that only sync on refresh, making it hard to trust what a board shows at any given moment.",
    solution:
      "Pulseboard pairs a React + Redux Toolkit front end with an Express/Node.js API and Socket.IO, so board and task updates propagate to every connected client the moment they happen, backed by a SQLite data layer and JWT-based authentication.",
    features: [
      "Real-time board and task updates via Socket.IO",
      "JWT-authenticated user sessions",
      "Centralized state management with Redux Toolkit",
      "RESTful Express API backed by SQLite",
    ],
    architecture:
      "A React SPA communicates with an Express REST API for CRUD operations and authentication, while a Socket.IO layer pushes live updates to all subscribed clients. Redux Toolkit manages client-side state and keeps the UI consistent with server events.",
    workflow: [
      "User authenticates via a JWT-secured login flow",
      "Client fetches boards/tasks through the REST API",
      "Redux Toolkit stores and derives UI state",
      "Socket.IO broadcasts changes to all connected clients in real time",
    ],
    challenges:
      "Keeping Redux state consistent with events arriving asynchronously over Socket.IO, while avoiding race conditions between REST responses and live socket updates.",
    results:
      "A working real-time project management workflow — boards and tasks stay in sync across clients without manual refreshes.",
    future: [
      "Role-based permissions for teams and boards",
      "Activity history and audit trail per task",
      "File attachments on tasks",
    ],
  },
  {
    id: "resumatic",
    index: "02",
    name: "Resumatic",
    tagline: "AI Resume Analyzer & Job Match Engine",
    category: ["Full Stack", "AI", "ML"],
    tech: ["React", "Flask", "Python", "SQLite", "Scikit-learn", "NLP", "TF-IDF", "Cosine Similarity"],
    live: "https://resume-analyzer-an8n.onrender.com",
    github: "https://github.com/khan2234mehak/resume-analyzer",
    overview:
      "Resumatic analyzes a resume against a target job description and scores how well the two align, using classic NLP techniques rather than a black-box model.",
    problem:
      "Job seekers rarely know how well their resume actually matches a specific job posting's language and requirements before they apply.",
    solution:
      "The Flask backend parses resume and job description text, vectorizes both with TF-IDF, and scores similarity using cosine similarity — a transparent, explainable approach to keyword and context matching — while the React front end presents the match and highlights.",
    features: [
      "Resume-to-job-description match scoring",
      "TF-IDF vectorization of resume and job text",
      "Cosine similarity based relevance scoring",
      "SQLite-backed storage for analysis history",
    ],
    architecture:
      "A React client sends resume and job description text to a Flask API. The API runs a Scikit-learn TF-IDF pipeline, computes cosine similarity between the two vectors, and returns a structured match result that the client renders.",
    workflow: [
      "User submits resume text and a target job description",
      "Flask preprocesses and vectorizes both documents (TF-IDF)",
      "Cosine similarity is computed between the vectors",
      "Match score and insights are returned to the React UI",
    ],
    challenges:
      "Tuning text preprocessing (tokenization, stopword handling) so the TF-IDF vectors capture meaningful overlap instead of noise from formatting artifacts in raw resume text.",
    results:
      "An end-to-end NLP pipeline that turns unstructured resume and job description text into an interpretable similarity score.",
    future: [
      "Section-level matching (skills vs. experience vs. education)",
      "Support for PDF/DOCX resume uploads",
      "Suggested keyword gaps based on the job description",
    ],
  },
  {
    id: "propwise",
    index: "03",
    name: "PropWise",
    tagline: "AI House Price Prediction",
    category: ["AI", "ML", "Data Science", "Python"],
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Joblib", "SQLite", "ReportLab"],
    live: "https://propwise-ai-house-price-prediction.onrender.com",
    github: "https://github.com/khan2234mehak/propwise-ai-house-price-prediction",
    overview:
      "PropWise predicts house prices from property features using a trained Gradient Boosting regression model, served through a secured Flask API with downloadable PDF valuation reports.",
    problem:
      "Estimating a fair property price from raw listing data requires consistent feature handling and a model that generalizes across varied property profiles.",
    solution:
      "A Gradient Boosting regressor is trained on engineered property features with StandardScaler normalization, serialized with Joblib, and served via a JWT-secured Flask API. Results can be exported as a PDF valuation report generated with ReportLab.",
    features: [
      "Gradient Boosting regression for price prediction",
      "Feature engineering and StandardScaler normalization",
      "JWT-secured prediction API",
      "Downloadable PDF valuation reports via ReportLab",
    ],
    architecture:
      "Pandas/NumPy handle data preparation and feature engineering offline; the trained Scikit-learn Gradient Boosting model is serialized with Joblib and loaded by a Flask API at request time. SQLite persists prediction records, and ReportLab renders PDF summaries on demand.",
    workflow: [
      "Property features are submitted to the Flask API",
      "Features are scaled and passed to the trained Gradient Boosting model",
      "Predicted price is returned and logged to SQLite",
      "User can export the result as a PDF report",
    ],
    challenges:
      "Normalizing heterogeneous property features consistently between training and inference so the served model's predictions stay reliable in production.",
    results:
      "A deployed regression service that turns property features into a price estimate and a shareable PDF report.",
    future: [
      "Confidence intervals around each prediction",
      "Location-based feature enrichment",
      "Model retraining pipeline on new listing data",
    ],
  },
  {
    id: "storytime",
    index: "04",
    name: "Storytime",
    tagline: "Interactive Storytelling App",
    category: ["Full Stack"],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQLite", "bcryptjs", "Express Session"],
    live: "https://storytime-fullstack-app.onrender.com",
    github: "https://github.com/khan2234mehak/storytime-fullstack-app",
    overview:
      "Storytime is a full-stack interactive storytelling application where users create accounts and progress through branching narrative content, backed by a session-authenticated Node/Express server.",
    problem:
      "Interactive, choice-driven stories need persistent, secure user accounts so progress and choices can be saved across sessions.",
    solution:
      "An Express server handles routing and session management, bcryptjs hashes and verifies user credentials, and Express Session keeps users authenticated across requests, with SQLite storing user and story data.",
    features: [
      "User accounts with bcryptjs password hashing",
      "Session-based authentication (Express Session)",
      "SQLite-backed persistence for users and story progress",
      "Vanilla HTML/CSS/JS front end",
    ],
    architecture:
      "The Express server exposes routes for authentication and story content, using Express Session middleware to track logged-in users and SQLite as the persistence layer. The front end is built with HTML, CSS, and JavaScript.",
    workflow: [
      "User registers or logs in (credentials hashed with bcryptjs)",
      "Express Session issues and validates a session cookie",
      "Authenticated requests fetch/update story progress from SQLite",
    ],
    challenges:
      "Structuring session-based auth securely with Express Session while keeping the vanilla JS front end straightforward to maintain.",
    results:
      "A working session-authenticated storytelling app with persistent user progress.",
    future: [
      "Branching story editor for authors",
      "Migration to token-based auth for API access",
      "Save/resume across multiple story paths",
    ],
  },
  {
    id: "employee-attrition",
    index: "05",
    name: "Employee Attrition Prediction",
    tagline: "HR Analytics & Classification Model",
    category: ["ML", "Data Science", "Python"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Matplotlib"],
    live: null,
    github: "https://github.com/khan2234mehak/employee-attrition-prediction",
    overview:
      "A classification project that predicts employee attrition risk from IBM's HR Analytics dataset, covering the full path from exploratory data analysis to a trained, evaluated model.",
    problem:
      "Organizations want to identify employees at higher risk of leaving so retention efforts can be targeted, but attrition drivers are rarely obvious from raw HR data alone.",
    solution:
      "Exploratory data analysis on 1,470 records and 35 features surfaced key attrition patterns, informing a Random Forest Classifier (200 estimators, max_depth=10) trained with Scikit-learn.",
    features: [
      "EDA on IBM HR Analytics data (1,470 records, 35 features)",
      "Random Forest Classifier (200 estimators, max_depth=10)",
      "Model evaluation via ROC-AUC and confusion matrix",
      "Visualizations built with Matplotlib",
    ],
    architecture:
      "A Python/Pandas pipeline cleans and explores the dataset, engineers features for modeling, and trains a Scikit-learn Random Forest Classifier, with Matplotlib used to visualize distributions and evaluation results.",
    workflow: [
      "Load and explore the IBM HR Analytics dataset",
      "Clean data and engineer features",
      "Train a Random Forest Classifier",
      "Evaluate with ROC-AUC (0.80) and a confusion matrix",
    ],
    challenges:
      "Handling class imbalance typical of attrition datasets, where employees who leave are a minority, while keeping the model's evaluation metrics meaningful.",
    results:
      "A Random Forest model evaluated at a 0.80 ROC-AUC score on the IBM HR Analytics dataset.",
    future: [
      "Feature importance dashboard for HR stakeholders",
      "Experimenting with gradient boosting for comparison",
      "A lightweight Flask API to serve predictions",
    ],
  },
  {
    id: "aqi-forecaster",
    index: "06",
    name: "AQI Forecaster",
    tagline: "Real-Time Air Quality Index Prediction System",
    category: ["ML", "Data Science", "Python"],
    tech: ["Python", "Flask", "MySQL", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Gradient Boosting", "Chart.js", "Leaflet.js"],
    live: "https://aqi-forecaster-vy0t.onrender.com",
    github: "https://github.com/khan2234mehak/aqi-forecaster",
    overview:
      "AQI Forecaster generates 7-day air quality forecasts for 20 Indian cities, combining a weighted ensemble model with a live, map-based dashboard.",
    problem:
      "Air quality is highly time-dependent and city-specific, making it hard to give people a reliable short-term outlook without a proper time-series approach.",
    solution:
      "A weighted Random Forest + Gradient Boosting ensemble (55/45) generates 7-day AQI forecasts with 95% confidence intervals, using 35+ engineered time-series features (lags, rolling means, seasonal indices) validated with TimeSeriesSplit, and served through 9+ Flask REST endpoints.",
    features: [
      "Weighted Random Forest + Gradient Boosting ensemble (55/45)",
      "7-day forecasts with 95% confidence intervals for 20 Indian cities",
      "35+ engineered time-series features (lags, rolling means, seasonal indices)",
      "9+ Flask REST endpoints with TimeSeriesSplit validation",
      "Live map dashboard built with Leaflet.js and Chart.js",
    ],
    architecture:
      "MySQL stores historical air quality readings; Pandas/NumPy build lag, rolling-mean, and seasonal features; a Scikit-learn ensemble (Random Forest + Gradient Boosting) is trained with TimeSeriesSplit cross-validation and exposed via Flask REST endpoints. Leaflet.js renders the map and Chart.js renders forecast charts on the front end.",
    workflow: [
      "Historical AQI data is stored and queried from MySQL",
      "Time-series features are engineered (lags, rolling means, seasonality)",
      "The Random Forest + Gradient Boosting ensemble (55/45) is trained with TimeSeriesSplit",
      "Flask serves 7-day forecasts with confidence intervals to the map dashboard",
    ],
    challenges:
      "Validating a forecasting model correctly with time-series-aware cross-validation (TimeSeriesSplit) instead of standard k-fold, to avoid leaking future data into training.",
    results:
      "A live 7-day AQI forecasting system covering 20 Indian cities with confidence intervals and an interactive map dashboard.",
    future: [
      "Expand city coverage beyond the current 20",
      "Add pollutant-level breakdowns (PM2.5, PM10, NO2, etc.)",
      "Push notifications for forecasted AQI spikes",
    ],
  },
  {
    id: "sleepsense-ai",
    index: "07",
    name: "SleepSense AI",
    tagline: "Sleep Disorder Prediction System",
    category: ["ML", "Data Science", "Python"],
    tech: ["Python", "Flask", "Scikit-learn", "Random Forest", "SQLite", "HTML", "CSS", "JavaScript"],
    live: "https://sleep-disorder-prediction-ubfv.onrender.com",
    github: "https://github.com/khan2234mehak/sleep-disorder-prediction-",
    overview:
      "SleepSense AI predicts sleep disorders from clinical data using a Random Forest pipeline, deployed behind role-based dashboards for Admins, Doctors, and Patients.",
    problem:
      "Clinical sleep-disorder screening benefits from a fast, model-assisted first pass, but any deployed tool needs proper access control across different user roles.",
    solution:
      "A Random Forest pipeline with label encoding and feature scaling predicts sleep disorder risk from clinical inputs, with the trained model serialized to .pkl. Access is controlled through 5+ session-authenticated Flask endpoints with role-based (Admin/Doctor/Patient) dashboards and CSV export.",
    features: [
      "Random Forest pipeline with label encoding and feature scaling",
      "Model serialization to .pkl for fast inference",
      "Role-based dashboards for Admin, Doctor, and Patient",
      "5+ session-authenticated Flask endpoints",
      "CSV export of results",
    ],
    architecture:
      "Flask handles session-based authentication and role checks, routing each role to its own dashboard view. Clinical inputs are label-encoded and scaled, then passed to a Scikit-learn Random Forest model loaded from a serialized .pkl file. SQLite stores user and prediction data.",
    workflow: [
      "User authenticates and is routed to their role-based dashboard",
      "Clinical data is label-encoded and feature-scaled",
      "The Random Forest model predicts sleep disorder risk",
      "Results are stored in SQLite and can be exported as CSV",
    ],
    challenges:
      "Designing role-based access control cleanly within Flask sessions so Admin, Doctor, and Patient views each see only what's appropriate for their role.",
    results:
      "A deployed, role-aware clinical screening tool with model-backed sleep disorder predictions.",
    future: [
      "Additional clinical features to improve model accuracy",
      "Audit logging of predictions per doctor/patient",
      "Migration from session auth to JWT for API access",
    ],
  },
  {
    id: "face-attendance",
    index: "08",
    name: "Face Attendance System",
    tagline: "Smart Face Recognition Attendance System",
    category: ["Computer Vision", "AI", "Python"],
    tech: ["Python", "OpenCV", "Face Recognition", "Image Processing", "Flask", "SQLite"],
    live: "https://face-attendance-k1fx.onrender.com",
    github: "https://github.com/khan2234mehak/face-attendance-system",
    overview:
      "A real-time face detection and recognition system that automates attendance logging, with a classic OpenCV pipeline and an optional deep learning mode.",
    problem:
      "Manual attendance tracking is slow and easy to falsify; a camera-based system can verify presence automatically and log it consistently.",
    solution:
      "A real-time pipeline combines Haar Cascade face detection with LBPH (Local Binary Patterns Histograms) recognition, with an optional CNN/EfficientNet-B0 mode for higher-accuracy recognition, producing a confidence score per match. Recognized identities are logged to attendance records through JWT-secured routes.",
    features: [
      "Real-time face detection with Haar Cascade",
      "LBPH-based face recognition with confidence scoring",
      "Optional CNN/EfficientNet-B0 recognition mode",
      "Automated attendance logging via JWT-secured Flask routes",
      "SQLite-backed attendance records",
    ],
    architecture:
      "OpenCV captures and preprocesses video frames; Haar Cascade detects faces, which are passed to an LBPH recognizer (or the optional CNN/EfficientNet-B0 model) to identify individuals. Matches above a confidence threshold are logged to SQLite through a JWT-secured Flask API.",
    workflow: [
      "Camera feed is captured and preprocessed with OpenCV",
      "Haar Cascade detects faces in each frame",
      "LBPH (or optional CNN/EfficientNet-B0) recognizes the detected face",
      "A confident match is logged as attendance via a JWT-secured endpoint",
    ],
    challenges:
      "Keeping recognition robust to lighting and angle variation with the classic Haar Cascade + LBPH pipeline, which motivated the optional CNN/EfficientNet-B0 mode for tougher conditions.",
    results:
      "A working real-time attendance pipeline that detects, recognizes, and logs identities automatically with a confidence score.",
    future: [
      "Liveness detection to prevent photo-based spoofing",
      "Attendance analytics dashboard",
      "Multi-camera support for larger spaces",
    ],
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
