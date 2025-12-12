import { get } from "../config";

export const StaticPageApi = {
    eventPage : (data) => get(`/page/event`, {params: data}),
    awardsPage : (data) => get(`/page/award`, {params: data}),
    scholorship: (data) => get(`/page/scholorship`, {params: data}),
    home: (data) => get(`/page/home`, {params: data}),
    about: (data) => get(`/page/about`, {params: data}),
    contact: (data) => get('/page/contact-us', {params: data}),
    organization: (data) => get('/page/organization', {params: data})
 }