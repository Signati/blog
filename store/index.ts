import {parse} from 'cookie'
import {Context} from "@nuxt/types";
import {$content} from "@nuxt/content"

export interface ContextExpress extends Context {
}


export const state = () => ({})

export const actions = {
  // @ts-ignore
  async nuxtServerInit({commit}, {req, isServer, $vuetify}: ContextExpress) {
    if (req.headers.cookie) {
      try {
        // const data = await $content("articulos")
        //   .only(['title', "picture"])
        //   .fetch()

        //console.log("store", data,)

        //  console.log(auth)
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
