import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <List>
        {[...Array(5)].map((_, index) => (
          <ListItem key={index} paddingY="5px">
            <HStack>
              <Skeleton height="32px" width="32px" borderRadius="8px" />
              <SkeletonText noOfLines={1} width="100px" spacing="4" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreSkeleton;
