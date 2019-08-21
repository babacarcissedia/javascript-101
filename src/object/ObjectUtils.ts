import IPerson from "../interface/IPerson";

export class ObjectUtils {

  /**
   *
   * @param {object} input
   * @param {string} [input.name]
   */
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    // {name:'Virgine Lamesse'}
    return {
      first_name: '',
      last_name: '',
    }
  }
}



export class ObjectUtilsSolution extends ObjectUtils {
  static getFirstNameAndLastNameFromName (input: any): IPerson {
    const parts: string[] = input.name.split(' ')
    return {
      first_name: parts.slice(0, parts.length - 1).join(' '),
      last_name: parts[parts.length - 1],
    }
  }
}

export default process.env.PERSON === 'buddy' ? ObjectUtilsSolution : ObjectUtils
