/**
 * Created by wangxuan on 2017/7/30.
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class WNavigatorTest2 extends Component {

    render() {
        return (
            <View>
                <Text style={styles.textTitle}>界面二号</Text>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.text}>单机跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {

    },
    touchable: {
        width: 140,
        height:60,
        margin:10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"#39b85a",
        borderRadius:4,
    },
    textTitle: {
        alignSelf: 'center',
        fontSize:24,
        color: '#333'
    },
    text: {
        color: '#f5f5f5',
        fontSize: 20,
    }
})
