/**
 * Created by guoyazhou on 2017/4/9.
 * asia161@qq.com
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Platform,
    TouchableOpacity
} from 'react-native';

//会包含状态栏，还有顶部导航栏
export default class NavigationBar extends Component {


    render() {
        return <View style={styles.container}>
            {/*顶部状态栏*/}
            <View style={styles.stateBar}>
                <StatusBar hidden={false} barStyle="light-content"/>
            </View>
            {/*顶部导航栏*/}
            <View style={styles.navBar}>
                <View style={ styles.leftBtnStyle}>
                    {this.props.leftButton}
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.rightBtn}>
                    {this.props.rightButton}
                </View>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63B8FF',
        padding: 5
    },
    stateBar: {
        height: Platform.OS === 'ios' ? 30 : 0
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    leftBtnStyle: {
        flexDirection: 'row',
        height: 24
    },
    rightBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    }
});
