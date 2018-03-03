/**
 * Created by cesar on 25/2/16.
 */
export const SimpleChat = {
    options:  {
        texts: {
            loadMore: 'Load More',
            placeholder: 'Type message ...',
            button: 'send',
            join: 'Join to',
            left: 'Left the',
            room: 'room at'

        },
        template: 'SimpleChatInput'
        limit: 50,
        beep: false,
        showViewed: false,
        showReceived: false,
        showJoined: false,
        publishChats: function (roomId, limi) {
            return true
        },
        allow: function (message, roomId, username, avatar, name) {
            return true
        },
        onNewMessage: function (msg) {
            console.log(msg)
        },
        onReceiveMessage: function () {

        },
        onJoin: function (roomId, username, name,date) {
            //server
        },
        onLeft: function (roomId, username, name,date) {
            //server
        },
    },
    configure: function (options) {
        this.options = this.options || {};
        _.extend(this.options, options);
        return this;
    }
}
