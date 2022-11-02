"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controller/auth.controller");
exports.default = [
    {
        path: "/get_user",
        method: "get",
        handler: [auth_controller_1.authController.get_user],
    },
    {
        path: "/add_user",
        method: "post",
        handler: [auth_controller_1.authController.add_user],
    },
    {
        path: "/update_user",
        method: "put",
        handler: [auth_controller_1.authController.update_user],
    },
    {
        path: "/delete_user",
        method: "delete",
        handler: [auth_controller_1.authController.delete_user],
    },
    {
        path: "/create_user",
        method: "post",
        handler: [auth_controller_1.authController.create_user],
    },
    {
        path: "/forget_password",
        method: "post",
        handler: [auth_controller_1.authController.forget_password],
    },
    {
        path: "/login",
        method: "post",
        handler: [auth_controller_1.authController.login],
    },
    {
        path: "/dashboard",
        method: "post",
        handler: [auth_controller_1.authController.dashboard],
    },
];
