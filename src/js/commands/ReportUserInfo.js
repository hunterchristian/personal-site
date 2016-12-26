'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Command from './Command';

/**
 * Constructor for the ReportUserInfo simple command.
 * @param {Object} userInfo
 */
function ReportUserInfo(userInfo) {
    this.userInfo = userInfo;
}

_.extend(ReportUserInfo.prototype, Command.prototype, {
    operation: function (resolve, reject) {
        $.ajax('http://localhost:3000/metrics/addUserInfo', {
            type: 'POST',
            data: this.userInfo
        }).done(() => {
            resolve();
        }).fail(() => {
            reject();
        })
    }
});

module.exports = ReportUserInfo;
