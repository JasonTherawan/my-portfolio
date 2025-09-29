import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export default function ShaderBackground({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // A palette of darker colors for the shader
  const darkColors = [
    "#0d0d2b", // Deep Blue
    "#1a1a3d", // Dark Indigo
    "#2c2c54", // Midnight Blue
    "#4a4a70", // Slate Blue
  ];

  return (
    <>
      <div className="shader-background">
        {isMounted && (
          <MeshGradient
            className="w-full h-full"
            colors={darkColors} // Pass the dark colors here
          />
        )}
      </div>
      <div className="content-foreground">
        {children}
      </div>
    </>
  );
}