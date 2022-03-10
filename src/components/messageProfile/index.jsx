import style from './messageProfile.module.scss';
import { useSelector } from 'react-redux';
import { getImage } from 'helpers/image';
import { MainContext, useContext } from 'context/Context';
import { useNavigate } from 'react-router-dom';

export default function MessageProfile({ room }) {
  const activeUser = useSelector(state => state.user);
  const friend = room.users.find(u => u.username !== activeUser.username);
  // const { setActiveRoom } = useContext(SocketContext);
  let navigate = useNavigate();
  return (
    <div
      className={style.messageProfile}
      onClick={() => {
        navigate(`/messages/${room._id}`);
      }}>
      <img src={getImage(friend.profileImg)} />
      <div>
        <p>{friend?.username}</p>
        <p>{room?.lastMessage[0]?.text}</p>
      </div>
    </div>
  );
}
