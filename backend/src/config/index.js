import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    voyager: {
        apiKey: process.env.VOYAGER_API_KEY || "Kcb7B3do0Q6Vd9FHlI2UO6q92MM8hGW37NiYk2t9",
    }
};
