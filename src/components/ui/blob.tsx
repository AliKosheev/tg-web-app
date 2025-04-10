import * as anime from "animejs";

const Blob = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Достаём функцию из модуля
    const animate = (anime as any).default ?? anime;

    if (!pathRef.current) return;

    animate({
      targets: pathRef.current,
      d: [/* ... */],
      easing: "easeInOutQuad",
      duration: 9000,
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <svg>{/* ... */}</svg>
  );
};

export default Blob;