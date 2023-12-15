export type formData = {
    name: string;
    email: string;
    tel: string;
    city: string;
    selected: string;
    question: string;
};

export type responseData = {
    feedbackId: number;
    list: list[]
};

export type list = {
    name: string;
    email: string
}
