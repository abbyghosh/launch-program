import React, { useState, useRef, useEffect } from "react";

function ObserverImage({ src, srcHigh, alt }) {
  const [loadImage, setLoadImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    registerObserver(imageRef.current, setLoadImage);
  }, []);

  const registerObserver = (ref, setLoadImage) => {
    const observer = new IntersectionObserver((enteries, observer) => {
      console.log("Instersection triggered entries", enteries.length, enteries);
      enteries.forEach((entry) => {
        console.log("Instersection triggered entry", entry);
        if (!entry.isIntersecting) {
          return;
        }
        setLoadImage(true);
        observer.disconnect();
      });
      console.log("Instersection triggered entries", enteries.length, enteries);
    });
    observer.observe(ref);
  };

  if (loadImage) {
    return (
      <img
        src={src}
        srcSet={`${src} 1x, 
                ${srcHigh} 2x,
                ${srcHigh} 3x`}
        alt={alt}
        className="mission_img"
        onError={(e) => {
          if (src)
            setTimeout(() => {
              e.target.onerror = null;
              e.target.src = src;
            }, 500);
        }}
        ref={imageRef}
      />
    );
  }
  return (
    <span
      ref={imageRef}
      style={{ width: "100%", height: "215px", background: "lightgrey" }}
    />
  );
}

export default ObserverImage;
