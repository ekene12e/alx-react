import React from "react";
import PropTypes from "prop-types";

function NotificationItem({type, value, html, markAsRead, key}) {
    if ((type && value) && (!html)) return(<li data-notification-type={type} onClick={() => markAsRead(key)}>{value}</li>)
    return(
        <li data-priority={type} dangerouslySetInnerHTML={html}>{value}</li>
    )
}

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