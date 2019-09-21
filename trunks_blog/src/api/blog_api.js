import { get, post } from './http'

/**
 * 热门推荐
 */
export const BlogHotList = () => {
    return get('/blog/hot_list')
}

/**
 * 热门推荐
 */
export const BlognewList = () => {
    return post('/blog/hot_list')
}