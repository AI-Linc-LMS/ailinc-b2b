export const AILincLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <defs>
        <linearGradient id="ailincGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#ailincGradient)" />
      <text
        x="24"
        y="30"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        AL
      </text>
    </svg>
  );
};
