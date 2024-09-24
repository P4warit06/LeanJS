function mergeAndDestructure(obj1, obj2) {
    const {name,age} = { ...obj1, ...obj2 };
    return {name,age};

}
console.log(mergeAndDestructure({name:'John', age:25},{city:'New York'}))
console.log(mergeAndDestructure({name:'Jane'},{age:30,country:'USA'}))
