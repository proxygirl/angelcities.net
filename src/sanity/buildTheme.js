import urlForImage from './urlForImage'
import colorToRGBA from './colorToRGBA'

export default (obj) => {
  const isObject = val =>
    val && typeof val === 'object' && !Array.isArray(val);

  const addDelimiter = (a, b) =>
    a ? `${a}_${b}` : b;

  const paths = (obj = {}, head = '') => {
    return Object.entries(obj)
      .reduce((product, [key, value]) => 
        {
          let fullPath = addDelimiter(head, key)
          if(isObject(value) && !value["_type"]) {
            return product.concat(paths(value, fullPath))
            
          } else {

            let computed

            switch (value["_type"]) {
              case "image": 
                 computed = `url("${urlForImage(value).width(400).url()}")`;
                 break;
              case "color":
                computed =  colorToRGBA(value)
                break;
              default:
                computed = `${value}px`
                break;      
            }            

            return product.concat({key: fullPath, value: computed})

          }
        }, []);
  }

  return paths(obj)

}