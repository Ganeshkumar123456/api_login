import { AuthModel } from "../model/auth.model"


export class AuthService {
    
    get_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.get_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    add_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.add_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    update_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.update_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    delete_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.delete_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    create_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.create_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    forget_password(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.forget_password(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    login(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.login(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    dashboard(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.dashboard(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
}