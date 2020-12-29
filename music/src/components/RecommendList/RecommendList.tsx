import { getCount } from '@/api/utils.js';
import React from 'react';
import './style.js'
import { List, ListItem, ListWrapper } from './style.js';

interface RecommendListProps {
    recommendList: Array<{ id: number; picUrl: string; playCount: number;name: string;}>;
}
const RecommendList:React.FunctionComponent<RecommendListProps> = ({ recommendList }) => {
    return (
        <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.id + index}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    <img src={item.picUrl + "?param=300x300"} alt="music"/>
                                    <div className="play_count">
                                        <i className="iconfont play">&#xe885;</i>
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    );
}

export default React.memo(RecommendList);
