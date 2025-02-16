### 🛍️ Responsive Products Gallery
- This project is a responsive product gallery website that fetches and displays products using the Fake Store API. It is built with Next.js and styled using Material-UI for a professional look.

### 🚀 Features:
**🏬 Products Page**
   - Fetches products from the Fake Store API.
   - Displays product details, including:
     - Name
     - Image
     - Price
     - Short Description
   - Styled using Material-UI.

### 📝 Product Details Page
- Clicking a product navigates to a dynamic details page using Next.js routing.
- Displays full product details:
   - Product Name
   - Full Description
   - Image
   - Price
   - Category
   - Rating

### 🛠️ Technologies Used
- Next.js (for dynamic routing and rendering)
- Fake Store API (for fetching product data)
- Material-UI (for styling and responsiveness)
- Axios (for API requests)

### 🏗️ Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/SabahEzzat20/Elevate-Task.git
cd tech-task
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm run dev
```
4. Open in browser
- Go to `http://localhost:3000`

### 🌐 API Endpoint
This project fetches product data from: [🔗 Fake Store API](https://fakestoreapi.com/products)

### 📁 Project Structure
```bash
/tech-task
│── /.next            # Next.js build files  
│── /app  
│   ├── /[ProductId]  # Dynamic product details page  
│   │   ├── page.js  
│   ├── /Product      # Products listing page  
│   │   ├── page.js  
│   ├── favicon.ico  
│   ├── layout.js     # Layout configuration  
│   ├── page.js       # Homepage  
│   ├── page.module.css # Styles  
│── /public           # Static assets  
│   ├── file.svg  
│   ├── globe.svg  
│   ├── next.svg  
│   ├── vercel.svg  
│   ├── window.svg  
│── /node_modules     # Dependencies  
│── .gitignore  
│── jsconfig.json  
│── next.config.mjs  
│── package-lock.json  
│── package.json  
│── README.md  
```

### 📌 Live Demo
[🔗 Live Project Link](https://elevate-task-roan.vercel.app/)
