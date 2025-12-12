import { post } from "../config";

export const SubmitApi = {
    lead: (data) => post(`/submit-lead`, data)
}