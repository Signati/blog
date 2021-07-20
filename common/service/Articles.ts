import {http} from './Api'
const url = 'articulos'
export const getArticles = async () => {
  return await http.get(url).then(data => data.data)
}
