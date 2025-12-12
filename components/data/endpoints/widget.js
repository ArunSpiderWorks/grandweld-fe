import { get } from "../config";

export const WidgetApi = {
  hello:(data) => get(`/widget/hello`, {params:data}), 
  newsLetter: (data) => get(`/widget/newsletter`, {params:data})
}