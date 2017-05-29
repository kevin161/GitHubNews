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
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import NavigationBar from '../../component/NavigationBar'
import CheckBox from 'react-native-check-box'
import Toast from 'react-native-easy-toast'

export default class CustomKeyPage extends Component{

    constructor(porps){
        super(porps);
        this.state={
            data:[
                {name:'Android',checked:true},
                {name:'IOS',checked:false},
                {name:'React Native',checked:true},
                {name:'Java',checked:true},
                {name:'JS',checked:true}
            ]
        };
    }


    handleBack=()=>{
        //把任务栈顶部的任务清除
        this.props.navigator.pop();
    }

    // to save
    handleSave=()=>{
        //AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统
        AsyncStorage.setItem('custom_key',JSON.stringify(this.state.data))
            .then(()=>this.refs.toast.show("保存成功！"));
    }

    getNavLeftBtn=()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.handleBack}>
                <Image source={require('../../../res/images/ic_arrow_back_white_36pt.png')}
                    style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>;
    };
    getNavRightBtn =()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
            onPress={this.handleSave}>
                <View style={{marginRight:10}}>
                    <Text style={{fontSize:16,color:'#fff'}}>保存</Text>
                </View>
            </TouchableOpacity>
        </View>;
    };

    handleClick=(item)=>{
        item.checked=!item.checket;
    };

    renderCheckBox=(item)=>{

        console.log(item.name+','+item.checked);
        return <CheckBox style={{flex:1,padding:10}}
        onClick={()=>this.handleClick(item)}
        leftText={item.name}
        isChecked={item.checked}
         uncheckedImage={<Image source={require('../../../res/images/ic_star_navbar.png')} style={styles.checkbox}/>}
         checkedImage={<Image source={require('../../../res/images/ic_star.png')} style={styles.checkbox}/>}
        />
    };

    renderViews=()=>{
        let len = this.state.data.length;
        var views=[];//要绘制的所有复选框，装入views数组
        for (let i=0,j=len-2;i<j;i+=2){
            views.push((
                <View key={`view_${i}`} style={{flexDirection:'row'}}>
                    {this.renderCheckBox(this.state.data[i])}
                    {this.renderCheckBox(this.state.data[i+1])}
                </View>
            ));
        }
        
        //偶数个，剩下最后两个多选框
        //奇数个，剩下最后一个多选框
        views.push(
            <View key={`key_${len-1}`} style={{flexDirection:'row'}}>
                {len % 2 === 0 ? this.renderCheckBox(this.state.data[len-2]) : <View style={{flex:1, padding:10}}></View>}
                {this.renderCheckBox(this.state.data[len-1])}
            </View>
        );
        return views;
    };


    render(){

        {/**属性指定方法时，带()表示立即执行，不带()表示点击或触发后执行**/}

        return <View style={styles.container}>
            <NavigationBar
                title="自定义分类"
                rightButton={this.getNavRightBtn()}
                leftButton={this.getNavLeftBtn()} />
            <View style={{flexDirection:'column'}}>
                {this.renderViews()}
            </View>
            <Toast ref="toast"/>
        </View>;
    }

    componentDidMount=()=>{
        //加载本地数据
        AsyncStorage.getItem('custom_key')
            .then(value=>{
                //有用户数据，选中该选中CheckBox
                if (value !== null){
                    this.setState({date:JSON.parse(value)});
                }
            });
    }
}

const  styles = StyleSheet.create({
    container:{
        flex:1
    },
    checkbox:{
        tintColor:'#63B8FF'
    }
});