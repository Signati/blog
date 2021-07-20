import {parse} from 'cookie'
import {Context} from "@nuxt/types";
import {$content} from "@nuxt/content"
import {getArticles} from "~/common/service/Articles";

export interface ContextExpress extends Context {
}


export const state = () => ({})

export const actions = {
  // @ts-ignore
  async nuxtServerInit({commit}, {req, isServer, $vuetify}: ContextExpress) {
    if (req.headers.cookie) {
      try {
         const data = await getArticles()
         commit("article/setArticles", data)
         // console.log("store", data,)

        //  console.log(auth)
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
