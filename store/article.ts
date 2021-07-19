import { RoutePath } from "~/common/types/RoutePath";
import {Database} from "@nuxt/content"
interface ArticleStore {
  articles: any[]
}

export const state = (): ArticleStore => ({
  articles: []
})
export const mutations = {
  setArticles(state: ArticleStore, routePaths: RoutePath[]) {
    state.articles = routePaths
  }
}

export const getters = {
  articles: (state: ArticleStore) => {
    return state.articles
  }
}
