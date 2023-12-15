import { defineStore } from 'pinia'
import type { formData } from "~/types/types";

export const useStore = defineStore('counter', () => {
    const data = ref({});
    async function getData(formData: formData) {
        try {
            const { data } = await useFetch('/api/feedback');
            console.log(data);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return { data, getData }
})
