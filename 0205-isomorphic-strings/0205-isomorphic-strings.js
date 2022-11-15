/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length)
     return false;

    let eMap = new Map()
    for(let i=0; i<s.length; i++) {

        if(!eMap.has(s[i]))
           eMap.set(s[i], t[i])
        
        else if(eMap.get(s[i]) !== t[i])
            return false
  
        
        
    }
    return new Set([...eMap.values()]).size == eMap.size
};