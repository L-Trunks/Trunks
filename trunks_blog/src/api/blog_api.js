import { get, post } from './http'

/**
 * 热门推荐
 */
export const BlogHotList = () => {
    return get('/blog/hot_list')
}
/**
 * 轮播图
 */
export const BlogGetImage = () => {
    return get('/blog/get_image')
}
/**
 * 知识点数
 */
export const BlogAllCount = () => {
    return get('/blog/all_count')
}
/**
 * 最新知识点
 */
export const BlogNewList = () => {
    return get('/blog/new_list')
}
/**
 * 搜索
 */
export const BlogSearchList = (params) => {
    return get('/blog/search_list',params)
}

/**
 * 默认分类
 */
export const BlogSortList = () => {
    return get('/blog/sort_list')
}

/**
 * 根据分类查询
 */
export const BlogGetListBySort = (params) => {
    return get('/blog/get_list_bysort',params)
}

/**
 * 根据用户查询分类
 */
export const BlogGetSortListByUser = (params) => {
    return get('/blog/get_sort_list_by_user',params)
}
/**
 * 新建知识点分类
 */
export const BlogAddSort = (params) => {
    return post('/blog/add_sort',params)
}

/**
 * 修改知识点分类
 */
export const BlogUpdateSort = (params) => {
    return post('/blog/update_sort',params)
}

/**
 * 删除知识点分类
 */
export const BlogDeleteSort = (params) => {
    return post('/blog/delete_sort',params)
}

/**
 * 根据用户查询知识点列表
 */
export const BlogListByUser = (params) => {
    return get('/blog/blog_list_by_user',params)
}

/**
 * 查询一条知识点
 */
export const BlogDetailByUser = (params) => {
    return get('/blog/blog_detail_by_id',params)
}

/**
 * 上传知识点
 */
export const BlogAddBlog= (params) => {
    return post('/blog/add_blog',params)
}

/**
 * 删除知识点
 */
export const BlogDeleteBlog= (params) => {
    return post('/blog/delete_blog',params)
}

/**
 * 修改知识点
 */
export const BlogUpdateBlog= (params) => {
    return post('/blog/update_blog',params)
}