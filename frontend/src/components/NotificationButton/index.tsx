import axios from 'axios'
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'

type Props = {
    id: number
}


function NotificationButton(props: Props) {

    function notify() {
        axios.get(`${BASE_URL}/sales/${props.id}/notification`)
    }

    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => notify()}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton