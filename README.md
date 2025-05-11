# Persian Assignment Manager

A responsive assignment management system with Persian (RTL) support, built with React and Tailwind-inspired CSS.

![Screenshot](./screenshot.png)

## Features

- 📅 Full-screen assignment sections (آتی and گذشته)
- 📱 Fully responsive design
- 🔍 Search functionality for assignments
- 🗂 Sorting by type or date
- 🖥 Clean, modern UI with Persian support
- 🎨 Custom styling with CSS (no Tailwind dependency)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Project Structure

```
/src
├── App.jsx          # Main application component
├── main.jsx         # Entry point
├── style.css        # Custom CSS styles
├── components/
│   ├── SidebarMenu.jsx  # Sidebar navigation
│   ├── AssignmentCard.jsx # Individual assignment cards
│   └── AssignmentSection.jsx # Assignment sections
```

## Customization

### Changing Colors
Edit `style.css` to modify:
- Sidebar link colors (blue by default)
- Main content link colors (gray by default)
- Background and card colors

### Adding Features
1. To add new assignment types, modify the `assignments` array in App.jsx
2. To change the layout, edit the CSS classes in style.css

## Technologies Used

- React 18
- Vite (for fast development)
- Lucide React (for icons)
- Custom CSS (no UI frameworks)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - see [LICENSE](LICENSE) for details.
