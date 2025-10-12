# 🛒 Cartlow E-Commerce Automation Project

This project automates an end-to-end **shopping cart scenario** on the [Cartlow](https://cartlow.com) e-commerce web application using **Playwright with TypeScript**.  
The automation simulates a user journey that includes selecting a region, browsing items, adding and removing products from the cart, and validating cart behavior.

---

## 📘 Project Overview

### **Automated Scenario Steps**

1. **Choose Region:**  
   Select the region as **UAE**.

2. **Navigate to Homepage:**  
   Open the main page of the Cartlow web application.

3. **Browse Laptops:**  
   - Click on the **Laptops** tab.  
   - Select the item:  
     > Apple MacBook Air 13-Inch (2018) A1932 – Intel Core i5 1.6GHz, 8GB RAM, 128GB SSD, English/Arabic Keyboard, Gold 
   - Add **1 item** to the cart.

4. **Browse Smartwatches:**  
   - Click on the **Smartwatches** tab.  
   - Select the item:  
     > Apple Watch Series 6 (40mm, GPS + Cellular) Gold Aluminum Case with Pink Sand Sport Band
   - Choose the following options:  
     - **Connectivity:** GPS + Cellular  
     - **Color:** Silver  
     - **Size:** 44mm  
   - Add **2 items** to the cart.

5. **Open and Manage Cart:**  
   - Navigate to the **cart page**.  
   - Click **View Cart**.  
   - Remove the previously added **laptop** item from the cart.
---

## 🧱 Design Approach 
- Modular POM Structure: Each page (Home, Cart, Item Details, etc.) has its own class for better maintainability.

- Data-Driven Tests: Product and region details are stored in separate files under ```test-data```.

- Reusable Methods: Common actions like navigation, click, or add-to-cart are encapsulated.

- Scalable Design: Can easily extend for more products, regions, or test cases.
---

## 🧩 Project Structure

``` text
📦 cartlow-ecommerce-automation/
│
├── 🧪 tests/
│ └── 🧾 cart-scenario.spec.ts # Main test file executing the scenario
│
├── 🧱 pages/ # Page Object Model (POM) classes
│ ├── 🏠 home-page.ts # Handles homepage actions (region selection, tabs, etc.)
│ ├── 🧭 tap-items-page.ts # Handles tab navigation (Laptops, Smartwatches, etc.)
│ ├── 📄 item-details-page.ts # Handles product detail selection and add-to-cart actions
│ ├── 🛒 cart-page.ts # Handles viewing and managing items in the cart
│ └── 🔐 login-page.ts # Handles login functionality (if required)
│
├── 📚 test-data/ # Contains test input data (JSON or TypeScript files)
│ ├── 🧍‍♂️ product-data.ts
│ └── 🌍 region-data.ts
│
├── ⚙️ playwright.config.ts # Playwright configuration (browsers, timeouts, etc.)
├── 📦 package.json # Project dependencies and scripts
├── 📘 README.md # Project documentation
└── 🧰 .github/
└── 🔄 workflows/
└── 🎭 playwright.yml # GitHub Actions CI workflow
```

---

## ⚙️ Tech Stack

- **Language:** TypeScript  
- **Framework:** Playwright  
- **Design Pattern:** Page Object Model (POM)  
- **CI/CD:** GitHub Actions  
- **Test Data Management:** JSON / TypeScript files under `test-data/`

---

## 🚀 Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/cartlow-ecommerce-automation.git
   cd cartlow-ecommerce-automation
2. **Install Dependencies**
   ```bash
   npm install
3. **Run Tests Locally**
   ```bash
   npx playwright test
4. **Run Tests with UI (headed mode)**
   ```bash
   npx playwright test --headed
5. **View Test Report**
   ```bash
   npx playwright show-report
--- 

## 🧠 CI/CD Integration (GitHub Actions)
This project includes a GitHub Actions workflow that automatically runs Playwright tests in the cloud every time code is pushed or a pull request is created.

- Workflow File: ```.github/workflows/playwright.yml```

- **What This Workflow Does**

    - Installs Node.js and Playwright browsers

    - Runs your Playwright tests in headless mode

    - Generates an HTML report and uploads it as a downloadable artifact in the Actions tab
---

## 🧪 Example Command
Run a specific test file:

    npx playwright test tests/cart-scenario.spec.ts --project=chromium
---

