import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

// Sound imports (make sure the sound files are available in your project folder)
import winSound from "./assets/win.mp3";
import drawSound from "./assets/draw.mp3";
import cardPopSound from "./assets/card.mp3";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showWinnerCard, setShowWinnerCard] = useState(false);
  const winner = calculateWinner(board);
  const { width, height } = useWindowSize();

  // Reference to the sound elements
  const winAudio = new Audio(winSound);
  const drawAudio = new Audio(drawSound);
  const cardPopAudio = new Audio(cardPopSound);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    cardPopAudio.play(); // Play card popping sound when a cell is clicked
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setShowWinnerCard(false);
  };

  const celebrateWin = () => {
    if (winner) {
      winAudio.play(); // Play win sound when a winner is detected
      setShowWinnerCard(true);
    } else if (!winner && !board.includes(null)) {
      drawAudio.play(); // Play draw sound when there is a draw
    }
  };

  useEffect(() => {
    celebrateWin();
  }, [winner, celebrateWin]); // Add celebrateWin to the dependency array

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-yellow-300 to-green-300 relative">
      {/* Moving Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: 80 },
              size: { value: 5 },
              shape: {
                type: ["circle", "star", "polygon"],
                options: { polygon: { sides: 5 } },
              },
              move: { enable: true, speed: 3 },
              links: { enable: true, color: "#ffffff", distance: 150 },
            },
          }}
        />
      </div>

      {/* Game Header */}
      <h1 className="text-white text-6xl font-extrabold mb-6 text-center">
        🎉 Fun Tic-Tac-Toe 🎉
      </h1>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl font-bold cursor-pointer transition-transform transform hover:scale-110"
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: cell === "X" ? "#ff7675" : cell === "O" ? "#74b9ff" : "#ffffff",
            }}
          >
            {cell}
          </div>
        ))}
      </div>

      {/* Reset Button */}
      {!showWinnerCard && (
        <button
          className="mt-6 px-8 py-3 bg-purple-500 text-white rounded-full shadow-xl text-lg font-bold hover:bg-purple-600 transition-colors"
          onClick={resetGame}
        >
          Restart Game
        </button>
      )}

      {/* Winner Announcement Card */}
      {showWinnerCard && (
        <>
          <Confetti width={width} height={height} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-2xl text-center">
            <h2 className="text-4xl font-bold text-green-600">
              🎉 {winner} Wins! 🎉
            </h2>
            <p className="text-lg mt-4 text-gray-700">
              Congratulations to the champion!
            </p>
            <button
              className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        </>
      )}

      {/* Footer */}
      <p className="mt-6 text-gray-800 text-lg">
        Made with ❤️ by{" "}
        <a
          href="https://www.buymeacoffee.com/abhijith"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abhijith
        </a>
      </p>
    </div>
  );
};

// Function to calculate the winner
function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default App;
