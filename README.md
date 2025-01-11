# Interactive Tic Tac Toe Game 🎮

A modern, interactive Tic Tac Toe game built with React, featuring beautiful animations, particle effects, and engaging sound design.

## ✨ Features

### Core Gameplay
- Interactive 3x3 game grid with smooth animations
- Alternating turns between X (red) and O (blue) players
- Smart win detection for rows, columns, and diagonals
- Draw detection when no winning moves remain
- Instant game reset functionality

### Visual Effects
- Dynamic particle background using react-tsparticles
- Celebratory confetti animation on victory
- Responsive cell animations on player moves
- Color-coded player marks (X: red, O: blue)
- Mobile-optimized responsive design

### Audio Experience
- Victory celebration sound
- Draw game sound effect
- Satisfying card pop sound on cell clicks
- All sounds can be toggled on/off

## 🛠️ Tech Stack

- **React** - Frontend framework
- **react-tsparticles** - Background particle effects
- **react-confetti** - Victory celebration effects
- **react-use** - Utility hooks for responsive design
- **Web Audio API** - Sound effect management

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tictactoe-game.git
```

2. Install dependencies:
```bash
cd tic-tac-toe
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser

## 📱 Responsive Design

The game is fully responsive and works seamlessly across:
- Desktop computers (1024px and above)
- Tablets (768px to 1023px)
- Mobile devices (320px to 767px)

## 🎯 Game Logic

### Win Detection
The game continuously checks for winning combinations:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonal possibilities

### Draw Detection
- Automatically detects when all cells are filled
- Triggers draw animation and sound
- Prompts players to start a new game

## 🎨 Custom Styling

The game features a modern, gradient-based design:
- Dynamic background particles
- Smooth hover effects
- Engaging click animations
- Celebratory effects


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 💝 Support

If you enjoy this game, consider supporting the developer:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow.svg)](https://www.buymeacoffee.com/abhijithb)
