export const localStoragePosts = () => {
  const savedPosts = localStorage.getItem("posts");

  if (savedPosts) {
    return JSON.parse(savedPosts);
  } else {
    return [];
  }
};
