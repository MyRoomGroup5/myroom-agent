import { useWs } from '@/store/Ws/context'
import { Button, List } from 'antd'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'

export const LiveList: FC = observer(() => {
  const ws = useWs()

  const handleClick = async (targetId: string) => {
    runInAction(() => {
      ws.targetId = targetId
    })
    ws.send('invite', { targetId, fromName: '经纪人 name ' })
  }
  return (
    <div>
      <List
        dataSource={ws.users}
        renderItem={(user) => (
          <List.Item>
            用户: {user.username}, id: {user.id}
            <Button onClick={() => handleClick(user.id)}>发起语音通话</Button>
          </List.Item>
        )}
      />
    </div>
  )
})
export default LiveList
