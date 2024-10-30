# Xavier's Bree Dashboard Submission

## How to Run the Project

To set up and run the project locally, follow these steps:

### 1. Clone the Repository: 
`git clone https://github.com/Xavier-MD/cash-advance-dashboard.git`
`cd your-project`

### 2. Install Dependencies:
Ensure you have Node.js installed. Then, install the required packages:
`npm install`

### 3. Start the Development Server:
`npm run dev`

### 4. Open the Application:
Navigate to http://localhost:3000 in your web browser to view the application.

## Design Choices

In developing this project, I focused on creating visuals that seamlessly align with the company's existing logo. Colors, fonts, and other design elements were carefully chosen to create a cohesive user experience.

### Color Palette
The color scheme was derived directly from the logo to maintain brand consistency. By using these specific colors throughout the application, the interface feels integrated and reinforces the company's identity.

### Typography
Fonts can dramatically influence the feel of a project. In this case, I selected fonts that capture the playfulness requested while keeping the layout simple. This combination aims to balance an engaging user experience with a professional appearance.

### Layout Simplicity
Simplicity was a key consideration in the layout design. A straightforward and intuitive interface allows users to navigate effortlessly, enhancing usability. The business-oriented color scheme adds a layer of professionalism, complementing the playful fonts.

## Challenges Faced and Solutions

Throughout the development process, I encountered several challenges that required innovative solutions:

### Responsive Design Implementation
Challenge: Ensuring the application maintains its visual appeal and functionality across various screen sizes and devices.
Solution: A mobile-first approach was adopted, using flexible grid systems and appropriate sizings. This strategy ensured a seamless user experience on smartphones, tablets, and desktops.

### State Management Complexity
Challenge: Managing state across multiple components became complex and risked prop drilling issues.
Solution: Leveraging React's Context API allowed for efficient global state management. This approach minimized unnecessary re-renders and simplified data flow within the application.