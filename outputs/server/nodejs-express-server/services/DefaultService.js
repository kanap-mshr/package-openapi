/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* サーバーの状態を返します
* サーバーの状態を返します。
*
* returns get_health_response
* */
const openapitutorial.controller.health.call = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  openapitutorial.controller.health.call,
};
