import React from 'react';
import styles from './Messenger.module.scss'


const Messenger = () => {
    return (
        <div className={styles.messenger}>
            <div className={styles.messenger__chats}>
                <div className="chat">chat</div>
                <div className="chat">chat</div>
                <div className="chat">chat</div>
                <div className="chat">chat</div>
                <div className="chat">chat</div>
            </div>
            <div className={styles.messenger__messages || styles.messages}>
                <div className={styles.messages__message}>Message1</div>
                <div className={styles.messages__message}>Message2</div>
                <div className={styles.messages__message}>Message3</div>
                <div className={styles.messages__message}>Message4</div>
                <div className={styles.messages__message}>Message5</div>
            </div>

        </div>
    );
};

export default Messenger;