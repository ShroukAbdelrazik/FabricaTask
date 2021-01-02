import { UserType } from "../enums/user-type.enum";

export class User {
    public constructor(
        public id?: number,
        public firstName?: string,
        public middleName?: string,
        public lastName?: string,
        public username?: string,
        public phoneNumber?: string,
        public whatsappNumber?: string,
        public email?: string,
        public password?: string,
        public userType: UserType = UserType.Customer,
        public customersIds?: number[],
        public isActive: boolean = true,
        public appliedDate?: Date

    ) { }
}
