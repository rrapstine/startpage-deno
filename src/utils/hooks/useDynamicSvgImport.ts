import { useRef, useEffect, useState } from 'react';

// Function to dynamically import SVGs, including loading and error states
// Usage: const { Svg, loading, error } = useDynamicSvgImport(iconName)

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);

    // Dynamically import the SVG passed in as a prop
    async function importSvgIcon() {
      try {
        importedIconRef.current = (
          await import(`../assets/images/app_icons/app_icon_${iconName}.svg`)
        ).ReactComponent;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    importSvgIcon();
  }, [iconName]);

  return { error, loading, Icon: importedIconRef.current };
}
