import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useIsCurrentPath = (targetPath:string) => {
  const location = useLocation();
  const [isCurrentPath, setIsCurrentPath] = useState(false);

  useEffect(() => {
    setIsCurrentPath(location.pathname === targetPath);
  }, [location.pathname, targetPath]);

  return isCurrentPath;
};

export default useIsCurrentPath;
