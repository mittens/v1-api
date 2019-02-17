const admin = require('firebase-admin')

class Messaging {
  send(token, notifications) {
    return Promise.all(
      notifications.map(({ body, repository }) =>
        admin.messaging().send({
          token,
          notification: {
            body,
            title: repository
          }
        })
      )
    )
  }
}

module.exports = new Messaging()
