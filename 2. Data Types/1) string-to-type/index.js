function stringToType(str) {
  if (str==='') {
      return ('');
  }
  if (Number(str)){
      return Number(str);
  }
  switch(str){
      case 'null':
          return null;
      case 'undefined':
          return undefined;
      case 'false':
          return  false
      case 'true':
          return true;
      case '0':
          return 0;
      defauilt:
          return(str);
          break;

  }

  }
};

window.stringToType = stringToType;

export default stringToType;
