import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { isNil, throttle } from "lodash";
import { Tile } from '../interfaces/tile';
import gameReducer, { initialState } from '../reducers/GameReducer';
import { gameWinTileValue, MERGE_ANIMATION_DURATION, tileCountPerDimension } from '../constants/constants';

type MoveDirection = "move_up" | "move_down" | "move_left" | "move_right";

export const GameContext = createContext({
  score: 0,
  status: "ongoing",
  moveTiles: (_: MoveDirection) => {},
  getTiles: () => [] as Tile[],
  startGame: () => {},
});

export default function GameProvider({ children }: PropsWithChildren) {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const getEmptyCells = () => {
    const results: [number, number][] = [];

    for (let x = 0; x < tileCountPerDimension; x++) {
      for (let y = 0; y < tileCountPerDimension; y++) {
        if (isNil(gameState?.board[y][x])) {
          results.push([x, y]);
        }
      }
    }
    return results;
  };

  const appendRandomTile = () => {
    const emptyCells = getEmptyCells();
    if (emptyCells.length > 0) {
      const cellIndex = Math.floor(Math.random() * emptyCells.length);
      const newTile = {
        position: emptyCells[cellIndex],
        value: 2,
      };
      dispatch({ type: "create_tile", tile: newTile });
    }
  };

  const getTiles = () => {
    return gameState?.tilesByIds.map((tileId) => gameState.tiles[tileId]) ?? [];
  };

  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      MERGE_ANIMATION_DURATION * 1.05,
      { trailing: false },
    ),
    [dispatch],
  );

  const startGame = () => {
    dispatch({ type: "reset_game" });
    dispatch({ type: "create_tile", tile: { position: [0, 1], value: 2 } });
    dispatch({ type: "create_tile", tile: { position: [0, 2], value: 2 } });
  };

  const checkGameState = () => {
    const isWon =
      gameState && Object.values(gameState.tiles).filter((t) => t.value === gameWinTileValue)
        .length > 0;

    if (isWon) {
      dispatch({ type: "update_status", status: "won" });
      return;
    }

    if (!gameState) {
      return;
    }

    const { tiles, board } = gameState;

    const maxIndex = tileCountPerDimension - 1;
    for (let x = 0; x < maxIndex; x += 1) {
      for (let y = 0; y < maxIndex; y += 1) {
        if (
          isNil(gameState?.board[x][y]) ||
          isNil(gameState?.board[x + 1][y]) ||
          isNil(gameState?.board[x][y + 1])
        ) {
          return;
        }

        if (tiles[board[x][y]].value === tiles[board[x + 1][y]].value) {
          return;
        }

        if (tiles[board[x][y]].value === tiles[board[x][y + 1]].value) {
          return;
        }
      }
    }

    dispatch({ type: "update_status", status: "lost" });
  };

  useEffect(() => {
    if (gameState?.hasChanged) {
      setTimeout(() => {
        dispatch({ type: "clean_up" });
        appendRandomTile();
      }, MERGE_ANIMATION_DURATION * 1.05);
    }
  }, [gameState?.hasChanged]);

  useEffect(() => {
    if (!gameState?.hasChanged) {
      checkGameState();
    }
  }, [gameState?.hasChanged]);

  return (
    <GameContext.Provider
      value={{
        score: gameState?.score ?? 0,
        status: gameState?.status ?? 'ongoing',
        getTiles,
        moveTiles,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}