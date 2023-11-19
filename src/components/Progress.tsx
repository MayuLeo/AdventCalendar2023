import Image from "next/image";

export const Progress = () => {
  const size = 120;
  const progressPersent = 1;
  // 半径
  const radius = 50;
  // 円周
  const circumference = 2 * Math.PI * radius;
  // 表示割合
  const strokeDashoffset =
    circumference - (progressPersent / 100) * circumference;
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="#A4D5A9"
          strokeWidth="5"
          fill="#F6FBF6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          transformOrigin: `${0}px ${size * 2 + 18}px`, // 回転する座標の起点
          transform: `rotate(${progressPersent * 3.6}deg)`,
        }}
      >
        <Image src="/santa.png" alt="santa" width="32" height="32" />
      </div>
    </div>
  );
};
