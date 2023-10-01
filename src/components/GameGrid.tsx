import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameGardContainer from "./GameGardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameGardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameGardContainer>
          ))}
        {data.map((game) => (
          <GameGardContainer key={game.id}>
            <GameCard game={game} />
          </GameGardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
