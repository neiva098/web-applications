export const handleChangeImageIndex = (index, length, direction) => {
    const newIndex = direction === 'left' ? index - 1 : index + 1

    if(newIndex >= length || newIndex < 0) {
        return 0
    }

    return newIndex
}
