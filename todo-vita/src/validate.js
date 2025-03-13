/**
 * todoの文字列数が0文字以上100文字以下かどうかを判定します。
 * @param {string} str todoの文字列
 * @returns {boolean} 0文字以上100文字以下の場合はtrue, それ以外の場合はfalse
 */
export function checkTodoLength(str){
    return str.length > 0 && str.length <= 100;
}
