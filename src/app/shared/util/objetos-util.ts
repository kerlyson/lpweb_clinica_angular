

export class ObjetosUtil {

  static deletaAtributosNulos(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }

}
