(function(){


    /**
     * 通过对象调用一个方法
     * @private
     * @param {Function} func 被调用的函数
     * @param {*} thisArg  调用func的对象
     * @param {Array} args 传入func的参数
     * @returns {*}
     */

    function apply (func, thisArg, args) {
        switch(thisArg.length) {
            case 0: return func.call(thisArg);
            case 1: return func.call(thisArg, args[0]);
            case 2: return func.call(thisArg, args[0], args[1]);
            case 3: return func.call(thisArg, args[0], args[1], args[1]);
        }
        return func.apply(thisArg, args);
    }



    /**
     * 判断一个值是不是对象
     * @static
     * @param {*} value 被判断的值
     * @returns {Boolean}
     */

    function isObject (value) {
        var val = typeof value;
        return val!=='null'&&val==='object'||val==='function';
    }


}.call(this))