import { useEffect, useRef, useState } from "react";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

// ============================================
// ============================================

const TempSWMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (ulRef.current !== null) {
      sessionStorage.setItem(
        "scrollHeight",
        JSON.stringify(ulRef.current.scrollHeight),
      );
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(function () {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 200);

  if (isLoading) {
    return <Loading />;
  }

  return <section className="ml-2 md:ml-10">test</section>;
};
export default TempSWMain;
