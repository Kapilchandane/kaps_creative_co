export default function LinkedInIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5v14h-4.5V8zm7.5 0h4.3v1.9h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.87V22h-4.5v-6.57c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V22h-4.5V8z" />
    </svg>
  );
}