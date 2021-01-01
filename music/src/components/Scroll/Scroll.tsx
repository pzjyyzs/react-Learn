import BScroll from 'better-scroll';
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle  } from 'react';
import styled from'styled-components';

interface propsScroll {
    direction?: 'vertical' | 'horizental';
    click?: boolean;
    refresh?: boolean;
    onScroll?: null | (() => void);
    pullUp?: null | (() => void);
    pullDown?: null | (() => void);
    pullUpLoading?: boolean;
    pullDownLoading?: boolean;
    bounceTop?: boolean;
    bounceBottom?: boolean;
}

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Scroll:React.FunctionComponent<propsScroll> = forwardRef((props, ref) => {
    const { direction, click, bounceTop, bounceBottom, pullUp, pullDown,  } = props;
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
            setBScroll(null)
        }
    }, [direction, click, bounceTop, bounceBottom])

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

    useEffect(() => {
        if (!bScroll || !pullUp) return;
        bScroll.on('scrollEnd', () => {
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUp()
            }
        }); 
        return () => {
            bScroll.off('scrollEnd')
        }
    }, [pullUp, bScroll])

    useEffect(() => {
        if (!bScroll || !pullDown) return;
        bScroll.on('touchEnd', (pos: any) => {
            if (pos.y > 50) {
                pullDown()
            }
        })
        return () => {
            bScroll.off('touchEnd')
        }
    }, [pullDown, bScroll])

    useImperativeHandle(
        ref,
        () => ({
            refresh() {
                if (bScroll) {
                    bScroll.refresh();
                    bScroll.scrollTo(0, 0) 
                }
            },
            getBScroll() {
                if (bScroll) {
                    return bScroll
                }
            }
        }),
    )
    return (
        <ScrollContainer ref={scrollContaninerRef}>
            { props.children }
        </ScrollContainer>
    );
})

Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: true,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
}
export default Scroll;
