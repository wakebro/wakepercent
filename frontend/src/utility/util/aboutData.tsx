import axios from "axios"
import { getDatasParams } from "../typescript/aboutData"

export function getDatas<T>({ API, params, callback}: getDatasParams<T>) {
  axios.get(API, {
    params: params
  })
  .then(res => {
    callback(res.data)
  })
}

export async function lineChanging<T extends Record<string, any>>(data: T, setData: React.Dispatch<React.SetStateAction<T>>) {
  await setData(data?.split('\n'))
}
