# NexusDash — Modern Admin Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-orange)
![AOS](https://img.shields.io/badge/AOS-2.3.1-pink)
![Dark Mode](https://img.shields.io/badge/dark%20mode-supported-black)

**NexusDash** is a sleek, modern, and fully responsive admin dashboard template built with **Bootstrap 5.3**, **Chart.js**, and **AOS animations**. It features persistent dark/light mode, system-aware theming, interactive charts, and a clean component structure — perfect for SaaS, analytics, or management dashboards.

---

## ✨ Features

* 🌗 **Persistent Dark Mode** – Toggle manually or auto-detect system preference using `localStorage`.
* 📊 **Interactive Charts** – Revenue line chart and traffic doughnut chart, fully themed.
* 🧩 **Modular Components** – Stat cards, task list, activity timeline, notifications, and project table.
* 📱 **Fully Responsive** – Mobile-first design with collapsible sidebar and adaptive layouts.
* 🎨 **2026-Ready CSS** – Uses CSS custom properties, `color-scheme`, `prefers-reduced-motion`, and fluid typography.
* ♿ **Accessible** – Focus-visible outlines, ARIA labels, and semantic HTML.
* ⚡ **Lightweight** – Pure HTML/CSS/JS with lightweight CDN libraries.
* 🧠 **Easy Customization** – Change theme colors through CSS variables.

---

## 🚀 Demo

> **[Live Preview](https://nexusdashboard17.netlify.app/)** — Replace this with your actual 

---

## 🛠️ Tech Stack

| Technology                                                          | Purpose                         |
| ------------------------------------------------------------------- | ------------------------------- |
| [Bootstrap 5.3](https://getbootstrap.com/)                          | Layout, grid, and UI components |
| [Font Awesome 6](https://fontawesome.com/)                          | Icons                           |
| [Chart.js](https://www.chartjs.org/)                                | Data visualization              |
| [AOS](https://michalsnik.github.io/aos/)                            | Scroll animations               |
| [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins) | Typography                      |

---

## 📦 Getting Started

### Prerequisites

* A modern web browser such as Chrome, Firefox, Safari, or Edge
* Basic understanding of HTML, CSS, and JavaScript for customization

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/JahanzaibJameel/NexusDashboard.git
cd nexusdash
```

#### 2. Open `index.html`

You can simply open `index.html` directly in your browser, or serve the project locally.

**Using Python:**

```bash
python -m http.server 8000
```

**Using Node.js:**

```bash
npx serve .
```

Then open the provided local URL in your browser.

#### 3. Start customizing

Edit the HTML, CSS, and JavaScript as needed to customize the dashboard for your project.

---

## 🎨 Customization

### Changing Theme Colors

Core colors are defined as CSS variables inside the `:root` selector:

```css
:root {
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --accent-color: #4895ef;
    --dark-color: #1a1a2e;
    --light-color: #f8f9fa;
    --success-color: #4cc9f0;
    --warning-color: #f72585;
    --info-color: #7209b7;
}
```

Modify these values to change the overall appearance of the dashboard.

Dark mode variables are overridden under:

```css
html[data-theme="dark"] {
    /* Dark theme variables */
}
```

### Adjusting Dark Mode

Dark mode is applied through the `data-theme="dark"` attribute on the `<html>` element.

The theme toggle:

1. Updates the `data-theme` attribute.
2. Stores the user's preference in `localStorage`.
3. Detects the system color preference when no manual preference exists.

To disable persistence, remove the related `localStorage` logic from the JavaScript.

### Updating Charts

Charts are initialized in the `<script>` section using Chart.js.

You can customize:

* **Revenue Chart** – Modify the `data` array inside `revenueChart`.
* **Traffic Chart** – Modify the `data` array inside `trafficChart`.
* Chart labels, datasets, colors, legends, tooltips, and other Chart.js options.

Both charts automatically adapt their colors to the active theme.

---

## 📁 Project Structure

```text
nexusdash/
├── index.html          # Main HTML file with embedded styles and scripts
├── screenshot.png      # Dashboard preview image (optional)
├── README.md           # Project documentation
└── assets/             # Optional local images, scripts, and other assets
```

> **Note:** For simplicity, the entire dashboard is contained inside a single `index.html` file. You can split the CSS and JavaScript into separate files as the project grows.

---

## 🌐 Browser Support

| Browser     | Supported |
| ----------- | :-------: |
| Chrome 90+  |     ✅     |
| Firefox 88+ |     ✅     |
| Safari 14+  |     ✅     |
| Edge 90+    |     ✅     |

---

## ♿ Accessibility

NexusDash follows modern accessibility practices, including:

* `:focus-visible` outlines for keyboard navigation.
* `aria-label` attributes on icon buttons.
* Semantic HTML elements such as `<nav>`, `<main>`, and `<table>`.
* `prefers-reduced-motion` support for users who prefer reduced animations.
* Accessible color contrast across light and dark themes.
* Responsive layouts that remain usable across different screen sizes.

---

## 🤝 Contributing

Contributions are welcome!

### How to Contribute

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/amazing-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add some amazing feature"
```

5. Push the branch:

```bash
git push origin feature/amazing-feature
```

6. Open a Pull Request.

Please follow the [Code of Conduct](code_of_conduct.md) if one is included in the repository.

---

## 📄 License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

## 🙏 Acknowledgements

* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Chart.js](https://www.chartjs.org/)
* [AOS](https://michalsnik.github.io/aos/)
* [Google Fonts](https://fonts.google.com/)
* [RandomUser.me](https://randomuser.me/) for sample user photos

---

<div align="center">

Made with ❤️ by <a href="https://github.com/your-username">Your Name</a>

</div>
