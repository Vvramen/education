function isEqualAdvances(a, b) {
    if (!a && !b) return true;
    if (a == null || b == null) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (!keysA.length && !keysB.length) return true;
    if (keysA.length !== keysB.length) return false;

    let res;
    let i = 0;
    for (let key in a) {
        if (typeof a[key] == "object" && typeof b[key] == "object") {
            return isEqualAdvances(a[key], b[key]);
        }
        if (typeof a[key] == "object" && typeof b[key] !== "object") return false;
        if (typeof a[key] !== "object" && typeof b[key] == "object") return false;
        if (
            String(keysA[i]) == String(keysB[i]) &&
            String(a[key]) == String(b[key])
        ) {
            res = true;
        } else {
            res = false;
        }
    }
    return res;
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
