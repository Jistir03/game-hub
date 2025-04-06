import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <HStack key={skeleton}>
            <GenreSkeleton />
          </HStack>
        ))}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => {
          const activeBgColor =
            genre.id === selectedGenre?.id ? "gray.500" : "transparent";
          const activeFontWeight =
            genre.id === selectedGenre?.id ? "bold" : "normal";
          const activeFontColor = genre.id === selectedGenre?.id ? "black" : "";
          return (
            <ListItem
              key={genre.id}
              paddingY="5px"
              paddingX="5px"
              bgColor={activeBgColor}
              borderRadius={8}
            >
              <HStack spacing={4}>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={activeFontWeight}
                  color={activeFontColor}
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
