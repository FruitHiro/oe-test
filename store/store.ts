import { defineStore } from 'pinia'
import type { formData, responseData } from "~/types/types";

export const useStore = defineStore('counter', () => {
    let feedbackId = ref(0);
    let list = ref([
        {
            name: 'test1',
            email: 'test1'
        },
        {
            name: 'test2',
            email: 'test2'
        },
        {
            name: 'test3',
            email: 'test3'
        }
    ]);
    async function getData(formData: formData) {
        try {
            const { data } = await useFetch('/api/feedback');
            if (data.value) {
                feedbackId.value = data.value?.feedbackId;
                list.value = data.value?.list;
            }
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return { feedbackId, list, getData }
})
