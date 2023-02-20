import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';


function NotificationItem({type, value, html, markAsRead, key}) {
    if ((type && value) && (!html)) return(<li
        data-notification-type={type}
        onClick={() => markAsRead(key)}
        className={type == "default" ? css(stylesNotificationItem.liDefault) : css(stylesNotificationItem.liUrgent)}>{value}</li>)
    return(
        <li data-priority={type} dangerouslySetInnerHTML={html}>{value}</li>
    )
}

const stylesNotificationItem = StyleSheet.create({
    liDefault: {
        color: "blue"
    },
    liUrgent: {
        color: "red"
    }
})

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}

export { NotificationItem };