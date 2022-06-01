import { FC } from 'react'
import { useDrag } from 'react-dnd'
import useEditorAction from '../../store/Editor/action'
import { DrawType } from '../types'
import './style.css'

/**
 * RoomCard Props
 */
type RoomCardProps = {
  id: string
  type: DrawType.ROOM_CARD
  fontSize: string
  //   color: string
  //   width: string  // 通过em指定大小
  //   height: string
  left: string
  top: string
  data: RoomInfo // 房源信息
}

/**
 * 描述房源信息
 */
type RoomInfo = {
  imgURL: string
  roomStructure: string // 房源结构
  listingName: string // 房源title
  totalPrice: number // 房源总价
  pricing: number // 报价, 元/平
  squaremeter: number // 建筑面积, 平米
  facingType: string // 朝向
  floorLevel: string // 楼层位置
  keywords: string[] // 描述房源的关键字
}

/**
 * 左边组件列表展示
 */
const RoomCardShow: FC = () => {
  const [, drag] = useDrag(() => ({
    type: DrawType.ROOM_CARD,
  }))

  return (
    <div className="text-component" ref={drag}>
      房源卡片
    </div>
  )
}

/**
 * 中间画板组件
 */
const RoomCardDraw: FC<RoomCardProps> = (props) => {
  const { changeEditId } = useEditorAction()
  const { id, data, ...styles } = props
  return (
    <div
      onClick={() => changeEditId(id)}
      style={{
        position: 'absolute',
        // backgroundColor: '#bbbbbb',
        ...styles,
      }}
      className="room-card-draw"
    >
      <img src={data.imgURL} alt="房源图片加载错误" />
      <div className="detail-info">
        <h3>
          {data.roomStructure} {data.listingName}
        </h3>
        <h4>{[data.squaremeter + '平', data.facingType, data.floorLevel + '楼层'].join('/')}</h4>
        <div className="keywords">{data.keywords.join('·')}</div>
      </div>
      <div className="price">
        <h3>{data.totalPrice}万</h3>
        <h4>{data.pricing}元/平</h4>
      </div>
    </div>
  )
}

/**
 * 左边组件拖拽到中间构建RoomCardDraw时的默认Props
 */
type buildArg = {
  id: string
  x: string
  y: string
}
const roomCardBuildProps: (arg: buildArg) => RoomCardProps = ({ id, x, y }) => {
  return {
    id,
    type: DrawType.ROOM_CARD as const,
    fontSize: '12px',
    left: x,
    top: y,
    data: {
      imgURL: '/src/assets/img/room.png',
      roomStructure: '9室3厅',
      listingName: '龙湖颐和原著院里',
      totalPrice: 3456,
      pricing: 200100,
      squaremeter: 1999,
      facingType: '南北',
      floorLevel: '低',
      keywords: ['近地铁', '繁华商圈', '低密度', '环境优雅'],
    },
  }
}

export { RoomCardShow, RoomCardDraw, roomCardBuildProps }
export type { RoomCardProps }
