export const getBestFrontCamera = () => {
  // check compability first

  return userMedia();
};

export const userMedia = () => {
  return (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    naviagor.msGetUserMedia
  );
};
