import { IUser } from "../../models/user";

export const LOGING = 'LOGING';

export const login = (user:IUser) => ({
  type: LOGING,
  data: user
})

