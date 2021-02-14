export const getMovieDetailViewPort = (
  screenHeight: number,
  screenWidth: number,
) => {
  const maxHeight = screenHeight * 0.65;
  const minHeight = 120;
  return {
    maxHeight: maxHeight,
    minHeight: minHeight,
    scrollDistance: maxHeight - minHeight,
    isWide: screenWidth >= screenHeight,
    screenWidth,
    screenHeight,
  };
};
