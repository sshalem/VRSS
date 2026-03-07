import { useEffect, useRef, useState } from "react";
import { Loading } from "../../../../components";

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-200">
      <div>
        <article className="flex h-28 items-center justify-between gap-1">
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
          <div className="flex h-[6.5rem] w-full flex-col justify-center border-2 border-gray-300 pl-1">
            <p>8600</p>
            <p className="text-sm text-gray-400">machine number</p>
          </div>
        </article>

        <div className="my-1"></div>
        <main className="h-4/5 border-2 border-gray-300">main</main>
      </div>
    </section>
  );
};
export default TempSWMain;
