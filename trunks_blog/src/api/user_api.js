import { get, post } from './http'

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
