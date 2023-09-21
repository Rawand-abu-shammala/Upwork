import { CustomLink, H4 } from '@/components'
import { useAppSelector } from '@/hooks/redux'
import Style from './style'

const User = () => {
    const { user } = useAppSelector(state => state.user);
    
    return (
        <Style>
            <img src={user.photo} alt={user.username} className="avatar" />
            <CustomLink to='PROFILE'>
                <H4 align='center' transform='capitalize' className='link'>{user.username}</H4>
            </CustomLink>
        </Style>
    )
}

export default User