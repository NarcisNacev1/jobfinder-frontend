---

# **Job Finder Frontend**

This repository contains the **frontend implementation** of the **Job Finder Application**, built with React and Chakra UI. The application allows users to upload their CV, fetch job postings, and display ranked job recommendations based on relevance.

---

## **Features**

1. **CV Upload Form:**
   - Users can input their personal details and upload a CV file.
   - Sends the data to the backend for processing.

2. **Job Ranking:**
   - Displays a list of job postings ranked based on their relevance to the uploaded CV.
   - Showcases job details like position, company name, relevance score, and description.

3. **Responsive Design:**
   - Built with Chakra UI for seamless responsiveness and elegant design.
   - User-friendly interface with modern styling.

4. **State Management:**
   - Utilizes React hooks (`useState`) to manage form inputs and API responses.

---

## **Installation**

### Prerequisites
- Node.js (16.x or higher)
- npm or yarn

### Steps
1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm start
   ```

4. **Configure Backend URL:**
   - Ensure the backend server is running at `http://127.0.0.1:8000/`.
   - Update API URLs in the code if your backend URL is different.

---

## **Project Structure**

### **Core Files**

1. **`App.tsx`**
   - The root component of the application.
   - Manages the overall flow:
     - CV upload form display.
     - Triggering the backend's job-ranking feature.
     - Displaying ranked job postings.

2. **`sections/CreateCVForm.tsx`**
   - Handles user input for personal details and CV upload.
   - Includes:
     - Input fields for name, email, phone, and location.
     - File upload input for CV.

3. **`sections/JobDisplay.tsx`**
   - Displays a list of ranked jobs.
   - Each job includes:
     - Position title.
     - Company name.
     - Relevance score.
     - Description snippet.

4. **`index.tsx`**
   - The entry point for the React app.

---

## **Key Components**

### **1. CreateCVForm**
- Collects user data and CV file.
- Example Flow:
  - Users fill in their details and upload a CV.
  - Data is sent to the backend `/api/cv/` endpoint.

### **2. JobDisplay**
- Dynamically renders a list of jobs with a clean card layout.
- Jobs are fetched from the backend `/api/cv/rank-jobs/` endpoint.
- Example Job Card:
  - **Job Position:** Software Engineer at Google.
  - **Match:** 85%.
  - **Description:** "Develop and maintain cutting-edge applications..."

---

## **API Workflow**

1. **Upload CV:**
   - Sends user data and CV file to the backend via `POST http://127.0.0.1:8000/api/cv/`.

2. **Fetch Ranked Jobs:**
   - Triggers `GET http://127.0.0.1:8000/api/cv/rank-jobs/`.
   - Receives a ranked list of jobs based on relevance.

---

## **Technologies Used**

1. **React:**
   - Component-based architecture for dynamic and reusable UI.

2. **Chakra UI:**
   - Built-in components for responsive and accessible design.
   - Customizable themes for modern aesthetics.

3. **TypeScript:**
   - Provides type safety and enhanced development experience.

4. **Fetch API:**
   - Used for communication with the backend.

---

## **Future Enhancements**

1. Add user authentication to store CVs per user.
2. Include filters to refine job results (e.g., location, industry, seniority).
3. Enhance UI with animations and improved visuals.
4. Deploy the frontend to a hosting platform like Vercel or Netlify.

---

## **Running in Production**

1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Deploy the `build` folder to a static hosting service like Netlify, Vercel, or AWS S3.

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and test them.
4. Submit a pull request.

---
