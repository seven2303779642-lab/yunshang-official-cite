import Link from "next/link";

type StoresButtonProps = {
  className?: string;
};

export default function StoresButton({ className = "" }: StoresButtonProps) {
  return (
    <Link
      href="/stores"
      className={`group relative block h-[50px] min-w-[220px] bg-[var(--color-red)] transition-colors duration-300 hover:bg-white ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[4px] bg-white transition-colors duration-300 group-hover:bg-[var(--color-red)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[7px] bg-[var(--color-red)] transition-colors duration-300 group-hover:bg-white"
      />

      <div className="absolute inset-[10px] z-20 flex items-center justify-center bg-white text-[20px] font-normal leading-none text-[var(--color-red)] min-[768px]:text-[26px]">
        查看附近门店
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 220 50"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
      >
        <g
          stroke="var(--color-red)"
          strokeLinecap="butt"
          className="[stroke-width:3]"
        >
          <line x1="0" y1="0" x2="8" y2="8" />
          <line x1="220" y1="0" x2="212" y2="8" />
          <line x1="0" y1="50" x2="8" y2="42" />
          <line x1="220" y1="50" x2="212" y2="42" />
        </g>
      </svg>
    </Link>
  );
}