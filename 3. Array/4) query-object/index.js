import stringToType from "../../2. Data Types/1) string-to-type/index.js";

function queryToObject(query) {
    let f = query.split("?").join("");
    return f.split("&").reduce((ob, v) => {
        v = v.split("=");
        ob[v[0]] = stringToType(v[1]);
        return ob;
    }, {});
    return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;
