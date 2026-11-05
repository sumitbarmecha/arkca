type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className = "size-3.5" }: ArrowIconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="M2.75 8h10.5M9.25 4.25 13.25 8l-4 3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
