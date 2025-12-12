import { get } from "../config";

export const GeneralApi = {
    settings: (data) => get(`/general-settings`, {params:data})
}