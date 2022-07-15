import axios from 'axios'
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request'
import './styles.css'

type Props = {
    id: number
}

function notify(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
}


function NotificationButton({ id }: Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => notify(id)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton