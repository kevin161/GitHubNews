/**
 * Created by guoyazhou on 2017/4/20.
 * asia161@qq.com
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CustomKeyPage from './CustomKeyPage';
import  NavigationBar from '../../component/NavigationBar'

export default class MyPage extends Component {

    //跳转界面
    gotoCustomKeyPage = ()=> {
        //跳转（类似于Android中添加一个任务到任务队列）
        this.props.navigator.push({
            component: CustomKeyPage
        });
    };

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title="我的"/>
            <View style={{flexDirection:'column',alignItems:'center',marginTop:30}}>
                <Text onPress={this.gotoCustomKeyPage}>自定义分类</Text>
            </View>
        </View>

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});