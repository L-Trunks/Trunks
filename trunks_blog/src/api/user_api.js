import { get, post } from './http'


/**
 * 获取用户列表,用于检查用户名是否重复
 */
export const UserNameList = () => {
    return post('/user/user_name_list')
}

/**
 * 登录
 */
export const UserLogin = (params) => {
    return post('/user/login', params)
}

/**
 * 注册
 */
export const UserRegister = (params) => {
    return post('/user/register', params)
}

/**
 * 请求封号
 */
export const UserGetBan = (params) => {
    return post('/user/user_get_ban', params)
}

/**
 * 取消请求
 */
export const UserGetUnBan = (params) => {
    return post('/user/user_get_un_ban', params)
}
/**
 * 获取关键字
 */
export const UserGetKeywords = (params) => {
    return get('/blog/get_keywords', params)
}

/**
 * 设置关键字
 */
export const UserAddKeywords = (params) => {
    return get('/blog/add_keywords', params)
}
/**
 * 根据ID查询用户信息
 */
export const GetUserInfo = (params) => {
    return post('/user/get_user_info', params)
}

/**
 * 修改个人资料
 */
export const UserUpdate = (params) => {
    return post('/user/update', params)
}

/**
 * 获取用户列表
 */
export const UserList = (params) => {
    return get('/user/user_list', params)
}

/**
 * 封号
 */
export const UserBan = (params) => {
    return post('/user/ban', params)
}

/**
 * 解禁
 */
export const UserUnBan = (params) => {
    return post('/user/unBan', params)
}