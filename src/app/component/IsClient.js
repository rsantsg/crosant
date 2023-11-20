import { createContext, useContext, useEffect, useState } from 'react';
export const runtime = "edge"

const IsClientCtx = createContext(false);

export const IsClientCtxProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
