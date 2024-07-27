
export const idPrefix = (userId: string) => userId && userId.slice(0,2).toLowerCase()

export const idToRole = (userId: string) => {
    const prefix = idPrefix(userId)

    if (prefix === 'ad'){
        return 'admin'
    }else if (prefix === 'st'){
        return 'student'
    }else if (prefix === 'th'){
        return 'teacher'
    }else{
        return null
    }
}

export const idToRoleTitleCase = (userId: string) => {
    const role = idToRole(userId)

    return `${role?.slice(0,1).toUpperCase()}${role?.slice(1)}`
}