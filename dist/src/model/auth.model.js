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
exports.AuthModel = void 0;
const db_1 = require("../config/db");
class AuthModel {
    static get_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`get_authentication`()',
                    values: [],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static add_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`create_user`(?,?,?,?,?,?,?,?);',
                    values: [body.first_name, body.last_name, body._email, body.phonenumber, body.security, body.dob, body.gen, body.role],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static update_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`update_user`(?,?,?,?);',
                    values: [body.auth_id, body.username, body.phonenumber, body.security],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static delete_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`delete_user`(?);',
                    values: [body.value1],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static create_user(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`create_user`(?,?,?,?,?,?,?,?);',
                    values: [body.first_name, body.last_name, body._email, body.phonenumber, body.security, body.dob, body.gen, body.role],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static forget_password(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`forget_password`(?,?);',
                    values: [body._email, body._password],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static login(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`forget_password`(?,?);',
                    values: [body._email, body._password],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
    static dashboard(body) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('body', body);
                db_1.dbClient.query({
                    sql: 'CALL `slambook`.`dashboard`(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
                    values: [body._my_name, body._nike_name, body._born_place, body._current_place,
                        body._contact_number, body._age, body._food, body._city, body._animal, body._tv_show, body._color_, body._movie, body._celebrity, body._song, body._about_me,
                        body._my_hobbies, body._best_memories, body._my_dreams, body._social_media, body._image],
                }, function (err, res) {
                    if (err) {
                        // console.log('err',err);
                        resolve(err);
                    }
                    else {
                        console.log('response', res);
                        resolve(res);
                    }
                });
            });
        });
    }
}
exports.AuthModel = AuthModel;
