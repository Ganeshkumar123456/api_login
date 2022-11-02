"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_model_1 = require("../model/auth.model");
class AuthService {
    get_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.get_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    add_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.add_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    update_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.update_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    delete_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.delete_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    create_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.create_user(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    forget_password(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.forget_password(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    login(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.login(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
    dashboard(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                auth_model_1.AuthModel.dashboard(body).then((res) => {
                    console.log(res);
                    resolve(res);
                });
            });
        });
    }
}
exports.AuthService = AuthService;
