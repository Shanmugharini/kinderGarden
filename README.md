# KiddoLearn – Interactive Learning for Kids

KiddoLearn is a web-based learning platform designed to make foundational learning engaging for children. It brings together Grade 2 lessons, subject-wise learning materials, quizzes, and interactive activities in one simple interface.

## Features

- **Subject-based learning:** Explore English, Mathematics, and Science content.
- **Interactive quizzes:** Answer topic-based questions and receive an engaging practice experience.
- **Learning activities:** Use interactive exercises, including image-based questions and matching activities.
- **Worksheets and lesson resources:** Access subject-specific practice materials and learning resources.
- **Progress tracking:** The application uses browser local storage to retain selected learning and progress information.
- **Simple navigation:** Move between the home page, grade-level content, subjects, and activities.

## Technology Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and learning content |
| CSS3 | Layout, styling, and responsive presentation |
| JavaScript | Quiz logic, activities, and client-side interactions |
| jQuery | DOM interactions in selected activities |
| Browser Local Storage | Demo account and learning-progress data |
| Font Awesome | Icons in selected pages |

## Project Structure

```text
kinderGarden/
├── index.html              # Home page and entry point
├── grade2.html             # Grade 2 subject navigation
├── english1.html           # English learning content
├── maths.html              # Mathematics learning content
├── science.html            # Science learning content
├── *.html                  # Topic pages, quizzes, and activities
├── css/                    # Stylesheets
├── js/                     # JavaScript files for quizzes and activities
├── images/                 # Image assets
└── images1/                # Additional image assets
```

## Getting Started

### Prerequisites

- A modern web browser
- Git (to clone the repository)
- Visual Studio Code (optional, for local development)

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Shanmugharini/kinderGarden.git
   ```

2. Open the project folder:

   ```bash
   cd kinderGarden
   ```

3. Open `index.html` in your browser.

   Alternatively, open the folder in Visual Studio Code and run the project with the **Live Server** extension.

> This is a front-end project. No backend server or database setup is required for the current implementation.

## Application Modules

### 1. Home Page
Provides the main entry point and navigation to the learning experience.

### 2. Grade 2 Learning
Organizes learning content by grade and provides access to the available subjects.

### 3. English
Contains English learning pages and related practice activities.

### 4. Mathematics
Provides mathematics topics and interactive practice activities.

### 5. Science
Provides science lessons, worksheets, and related learning resources.

### 6. Quizzes and Interactive Activities
Includes question-based quizzes and activities such as image-based multiple-choice questions and matching exercises.

### 7. Progress Tracking
Uses browser local storage to retain selected progress information on the same browser.

## Technical Notes and Limitations

- User/account and progress information is stored in the browser using local storage; it is not backed by a server-side authentication system or database.
- Local-storage-based credentials are suitable only for demonstration purposes and should not be used to protect real user accounts or sensitive information.
- Some pages load libraries or icons from external CDNs, so an internet connection may be required for those resources.
- The project is currently structured as a collection of linked HTML pages rather than a single-page application.

## Future Improvements

- Add secure backend authentication and database-backed user profiles.
- Provide centralized progress tracking across devices.
- Improve accessibility and responsive behaviour across screen sizes.
- Add more grade levels, subjects, and learning activities.
- Add automated tests for quiz logic and interactive components.

## License

No license file is currently included in this repository. Please contact the repository owner for permission before reusing or distributing the project.
