import { useId, createContext } from 'react';
const ParentContext = createContext('');
function Tiles({ children }: { children: JSX.Element[] }) {
  const divId = useId().replaceAll(':', '');

  return (
    <div className="tile-container">
      <div className="tile-container__inner" id={divId}>
        <ParentContext.Provider value={divId}>{children}</ParentContext.Provider>
      </div>
    </div>
  );
}

export { Tiles, ParentContext };
