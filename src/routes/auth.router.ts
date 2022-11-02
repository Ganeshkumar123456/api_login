import { authController }  from "../controller/auth.controller";
export default [
    {
        path: "/get_user",
        method: "get",
        handler: [authController.get_user],
    },
    {
      path: "/add_user",
      method: "post",
      handler: [authController.add_user],
  },
  {
    path: "/update_user",
    method: "put",
    handler: [authController.update_user],
},
{
  path: "/delete_user",
  method: "delete",
  handler: [authController.delete_user],
},
{
  path: "/create_user",
  method: "post",
  handler: [authController.create_user],
},
{
  path: "/forget_password",
  method: "post",
  handler: [authController.forget_password],
},
{
  path: "/login",
  method: "post",
  handler: [authController.login],
} ,
{
  path: "/dashboard",
  method: "post",
  handler: [authController.dashboard],
},   
]