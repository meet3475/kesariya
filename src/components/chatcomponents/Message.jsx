import React, { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/665f040e981b6c5647785eee/1hvhifm8v";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.async = true;

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Clean up the script when the component is unmounted
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component does not render anything
};

export default TawkTo;
