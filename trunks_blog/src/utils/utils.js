//工具类

//格式化日期
export const formatDate = () => {



}

//转码
export const Unicode = () => {



}

/**
 * 高性能数组去重
 * @returns Array
 * @constructor
 * @param arr
 */
export const duplicateRemoval = (arr) => {
    let obj = {};
    let result = [];
    for (let i of arr) {
        if (!obj[i]) {
            result.push(i);
            obj[i] = i;
        }
    }
    return result
};

const formatNumber = (a) => {
    return a < 10 ? '0' + a : a;
}
//日期格式化
export const formatTime = (timenumber, format) => {
    if (!timenumber) return '';
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(timenumber);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));
    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));
    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

//unicode转中文
export const exchangeUnicode = (str) => {
    //    str = JSON.stringify(str)
    str = str.replace(/(\\u)(\w{1,4})/gi, ($0) => {
        return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")),
            16)));
    });
    //    str = JSON.parse(str);
    return str;
}