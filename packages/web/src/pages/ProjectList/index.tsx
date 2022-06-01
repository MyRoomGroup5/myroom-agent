import React,{ memo } from 'react'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/lib/table';
import "./style.css"
const { Search } = Input;
interface DataType {
  key: string;
  name: string;
  time: any;
  author: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <span>|</span>
        <a>删除</a>
        <span>|</span>
        <a>发布</a>
        <span>|</span>
        <a>查看在线用户</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '项目1',
    time: new Date().toDateString(),
    author: "ccc",
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '项目2',
    time: new Date().toDateString(),
    author: "ccc",
    tags: ['loser'],
  },
  {
    key: '3',
    name: '项目3',
    time: new Date().toDateString(),
    author: "ccc",
    tags: ['cool', 'teacher'],
  },
];

export default memo(function ProjectList() {
    const onSearch = () => {

    }
    return (
        <div className='content'>
            <div>
                <div className='find'>
                    <div>项目列表</div>
                    <div>
                        <Search placeholder="请输入" onSearch={onSearch} enterButton />
                    </div>
                </div>
                <div className="find add">
                    <div>
                        <a>+添加新项目</a>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>  
        </div>
    )
})





