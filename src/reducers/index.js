import { combineReducers} from 'redux';
import ArticleReducer from './ArticleReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  articles: ArticleReducer,
  selectedArticleId: SelectionReducer
});
