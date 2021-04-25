export const errorHandler = (e: any) => {
    if (e?.response?.data) {
        alert(e.response.data.message)
    } else {
        alert(e.message)
    }
}