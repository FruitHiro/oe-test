export default defineEventHandler((event) => {
    return {
        feedbackId: 123,
        list: [
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
        ]
    }
})
