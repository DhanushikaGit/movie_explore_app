const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '7d63737a96196b58b70eb2c2c85bf928', // Replace with your actual TMDB API key
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
};

export default apiConfig;