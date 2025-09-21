import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
}