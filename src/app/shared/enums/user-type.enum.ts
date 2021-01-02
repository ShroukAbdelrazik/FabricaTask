export enum UserType {
    Admin,
    Customer
}

export namespace UserType {
    export function keys(): Array<string>{
      var keys = Object.keys(UserType);
      return keys.slice(keys.length / 2, keys.length-1);
    }
}
