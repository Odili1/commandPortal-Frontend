

export const idToRole = (userId: string) => {
    const idPrefix = userId.slice(0, 2)

    if (idPrefix === 'Ad'){
        return 'admin'
    }else if (idPrefix === 'St'){
        return 'student'
    }else if (idPrefix === 'Th'){
        return 'teacher'
    }else{
        return null
    }
}
