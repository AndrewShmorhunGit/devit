export const handleApiRequest = async (index: number): Promise<{ success: boolean; index: number }> => {
    const delay = Math.floor(Math.random() * 1000) + 1;
    await new Promise((resolve) => setTimeout(resolve, delay));

    return { success: true, index };
};
