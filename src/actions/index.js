export const selectArticle = (articleId) => {
  return {
    type: 'select_article',
    payload: articleId
  }
};
