import {Context} from "@nuxt/types/app";
import {contentFunc} from "@nuxt/content/types/content";

export interface Ctx extends Context {
  $content: contentFunc
}
