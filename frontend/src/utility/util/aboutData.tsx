import axios from "axios"
import { getDatasParams } from "../typescript/aboutData"

export function getDatas<T>({ API, params, setState}: getDatasParams<T>) {
  axios.get(API, {
    params: params
  })
  .then(res => {
    setState(res.data)
  })
}