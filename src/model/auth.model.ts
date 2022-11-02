import { dbClient } from "../config/db";

export class AuthModel {
  static get_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `slambook`.`get_authentication`()',
          values: [],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static add_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`create_user`(?,?,?,?,?,?,?,?);',
   values: [body.first_name,body.last_name,body._email,body.phonenumber,body.security,body.dob,body.gen,body.role],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static update_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql: 'CALL `slambook`.`update_user`(?,?,?,?);',
          values: [body.auth_id,body.username,body.phonenumber,body.security],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static delete_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`delete_user`(?);',
          values: [body.value1],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static create_user(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`create_user`(?,?,?,?,?,?,?,?);',
          values: [body.first_name,body.last_name,body._email,body.phonenumber,body.security,body.dob,body.gen,body.role],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static forget_password(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`forget_password`(?,?);',
          values: [body._email,body._password],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static login(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`forget_password`(?,?);',
          values: [body._email,body._password],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
  static dashboard(body: any) {
    return new Promise(async function (resolve, reject) {
      console.log('body', body);
      dbClient.query(
        {
          sql:'CALL `slambook`.`dashboard`(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
          values: [body._my_name,body._nike_name,body._born_place,body._current_place,
            body._contact_number,body._age,body._food,body._city,body._animal,body._tv_show,body._color_,body._movie,body._celebrity,body._song,body._about_me,
            body._my_hobbies,body._best_memories,body._my_dreams,body._social_media,body._image],
        },
        function ( err: Error,res: any) {
          if (err) {
            // console.log('err',err);
            resolve (err)
;          } else {
            console.log('response',res);
            resolve(res);
          }
        }
      );
    });
  }
}
