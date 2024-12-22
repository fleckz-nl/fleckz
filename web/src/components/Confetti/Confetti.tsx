import React, { useMemo } from 'react'
import './confetti.css'

const Confetti = ({
  numberOfPieces = 50,
  colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'],
}) => {
  const confetti = useMemo(
    () => generateConfettiPieces(numberOfPieces, colors),
    [numberOfPieces, colors]
  )

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="animate-fall absolute"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.isCircle ? '50%' : '0',
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall ${piece.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

const generateConfettiPieces = (numberOfPieces: number, colors: string[]) => {
  return Array.from({ length: numberOfPieces }).map((_, index) => ({
    id: index,
    left: Math.random() * 100,
    size: Math.random() * 10 + 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 3 + 2,
    isCircle: Math.random() > 0.5,
    rotation: Math.random() * 360,
  }))
}

export default Confetti
