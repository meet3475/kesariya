import { useEffect, useRef } from "react";

export const GoogleTranslate = () => {
  const languageCodes = [
    "as",
    "bn",
    "brx",
    "doi",
    "gu",
    "hi",
    "kn",
    "ks",
    "kok",
    "mai",
    "ml",
    "mni",
    "mr",
    "ne",
    "or",
    "pa",
    "sa",
    "sat",
    "sd",
    "ta",
    "te",
    "ur",
    "sit",
    "tcy",
    "lus",
    "kha",
    "grt",
    "bhi",
  ];

  const googleTranslateRef = useRef(null);

  useEffect(() => {
    let intervalid;
    const changelanguage = () => {
      if (window.google && window.google.translate) {
        clearInterval(intervalid);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          googleTranslateRef.current
        );
      }
    };
    intervalid = setInterval(changelanguage, 100);
  }, []);

  return (
    <div>
      <div ref={googleTranslateRef}></div>
    </div>
  );
};
