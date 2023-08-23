import { useEffect, useState } from "react";

const useLoader = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [delay]);

  return loading;
};

export default useLoader;