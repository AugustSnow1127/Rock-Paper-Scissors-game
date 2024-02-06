import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ScoreContext = createContext();

export const useScoreStore = () => useContext(ScoreContext);

export const ScoreContextProvider = ({ children }) => {
  const [scoreNum, setScoreNum] = React.useState(0);

  return (
    <ScoreContext.Provider
      value={{
        scoreNum,
        setScoreNum,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

ScoreContext.propTypes = {
  children: PropTypes.node.isRequired,
};
