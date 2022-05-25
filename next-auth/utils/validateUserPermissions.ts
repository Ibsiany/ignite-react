
type User = {
    permissions: string[];
    roles: string[];
}


type ValidateUserPermissionsParams = {
    user: User | undefined;
    permissions?: string [];
    roles?: string [];
}


export function validateUserPermissions({user, permissions, roles}: ValidateUserPermissionsParams){
    if(permissions && permissions.length > 0){
        const hasAllPermissions = permissions.every(permission => {
            return user?.permissions.includes(permission)
        })

        if(!hasAllPermissions){
            return false
        }
    }

    if(roles && roles.length > 0){
        const hasAllRoles = roles.some(role => {
            return user?.permissions.includes(role)
        })

        if(!hasAllRoles){
            return false
        }
    }

    return true;
}