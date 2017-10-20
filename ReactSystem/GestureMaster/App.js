/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    Modal,
} from 'react-native'
const {width,height} = Dimensions.get('window')
import Swiper from 'react-native-swiper'
import ImageZoom from 'react-native-image-pan-zoom';
import ImageViewer from 'react-native-image-zoom-viewer'
import ViewControl from './app/widget/ViewControl'

export default class App extends Component<{}> {

    renderSwiperItemView() {
        const imgs = [
            'http://img1.ph.126.net/u1dVCkMgF8qSqqQLXlBFQg==/6631395420169075600.jpg',
            'http://img2.ph.126.net/PqPdn4nhTSXTlPfDE_igJg==/6631322852401020356.jpg',
            'http://img1.ph.126.net/Ta6-WaHwuYMSehnn6Xcmyg==/6631426206490316698.jpg',
            'http://img0.ph.126.net/bCkBoPHS4d32mUJPqBIYrQ==/6631803338979839988.jpg',
            'http://img2.ph.126.net/bkaOfRyDoyddXri0GjpWjA==/6630608169839463386.jpg',
        ];
        return imgs.map((item,i)=>{
            return (
                <ViewControl
                    key={i}
                    cropWidth={width}
                    cropHeight={height-200}
                    imageWidth={200}
                    imageHeight={200}>
                    <Image
                        style={{
                            width:200,
                            height:200
                        }}
                        source={{
                            uri:item
                        }}/>
                </ViewControl>
            )
        })
    }

    render0() {
        return (
            <Swiper
                loop={false}
                showsPagination={true}>
                {this.renderSwiperItemView()}
            </Swiper>
        );
    }

    render() {
        const images = [{
            url: 'http://img1.ph.126.net/u1dVCkMgF8qSqqQLXlBFQg==/6631395420169075600.jpg'
        }, {
            url: 'http://img1.ph.126.net/Ta6-WaHwuYMSehnn6Xcmyg==/6631426206490316698.jpg'
        }, {
            url: 'http://img2.ph.126.net/bkaOfRyDoyddXri0GjpWjA==/6630608169839463386.jpg',
        }]
        return (
            <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={images}/>
            </Modal>
        );
    }

    render1() {
        return (
            <ImageZoom cropWidth={width}
                       cropHeight={height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image
                    style={{
                        width:200,
                        height:200
                    }}
                    source={{
                        uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'
                    }}/>
            </ImageZoom>
        )
    }

    render2() {
        return (
            <ViewControl
                cropWidth={width}
                cropHeight={height}
                imageWidth={200}
                imageHeight={200}
                        >
                <Image
                    style={{
                        width:200,
                        height:200
                    }}
                    source={{
                        uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'
                    }}/>
            </ViewControl>
        )
    }

}

