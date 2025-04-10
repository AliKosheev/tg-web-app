export function DotsGrid(props: React.ComponentProps<"svg">) {
    return (
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.13" cy="1.13" r="1.13" fill="white" opacity="0.035" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  }