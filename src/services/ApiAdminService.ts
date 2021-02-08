import { IAdminData } from "../models/adminData";

export const adminServiceApi = {
    getAdminData(): Promise<any> {
        return fetch(`api/admin/getadmindata`)
       .then(response => response.json() as Promise<IAdminData>)
    }
}
