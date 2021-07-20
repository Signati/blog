import {RoutePath} from "~/common/types/RoutePath";
import {Database} from "@nuxt/content"
import {Articles} from "~/common/types/Articles";

interface ArticleStore {
  articles: any[]
}

export const state = (): ArticleStore => ({
  articles: []
})
export const mutations = {
  setArticles(state: ArticleStore, routePaths: Articles[]) {
    state.articles = routePaths.map((value, i) => {
      return ((i % 3) === 0) ? {
          extension: 'ads',
        } as Articles : value
    })

  }
}

export const getters = {
  articles: (state: ArticleStore) => {
    return state.articles
  }
}
