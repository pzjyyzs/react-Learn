import BScroll from 'better-scroll';
import React, { forwardRef, useState, useRef, useEffect  } from 'react';

interface propsScroll {
    direction: 'vertical' | 'horizental';
    click: boolean;
    refresh: boolean;
    onScroll: () => void;
    pullUp: () => void;
    pullDown: () => void;
    pullUpLoading: boolean;
    pullDownLoading: boolean;
    bounceTop: boolean;
    bounceBottom: boolean;
}

const Scroll = forwardRef((props: propsScroll, ref) => {
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom, pullUp, pullDown, onScroll } = props;
    const [bScroll, setBScroll] = useState<any>({});
    const scrollContaninerRef = useRef<any>();
    useEffect(() => {
        const scroll = new BScroll(scrollContaninerRef.current, {
            scrollX: direction === "horizental",
            scrollY: direction === "vertical",
            probeType: 3,
            click: click,
            bounce:{
              top: bounceTop,
              bottom: bounceBottom
            }
        })
        setBScroll(scroll);
        return () => {
            setBScroll({})
        }
    }, [])

    useEffect(() => {
        if (!bScroll || !pullUp) return;
        bScroll.on('scrollEnd', () => {
            // 判断是否滑动到了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
              pullUp ();
            }
        });
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [pullUp, bScroll])
    return (
        <div>
            
        </div>
    );
})

Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll: () => null,
    pullUpLoading: true,
    pullDownLoading: false,
    pullUp: () => null,
    pullDown: () => null,
    bounceTop: true,
    bounceBottom: true
}
export default Scroll;
