import React, {Component} from 'react'
import {
    View,
    ActivityIndicator,
    Image,
    Dimensions,
    Linking,
    TouchableHighlight
} from 'react-native'
import Swiper from 'react-native-swiper'

var {width} = Dimensions.get('window');

const Slide = props => {
    if (props.href){
        return <View style={{flex:1, justifyContent:'center',width,height:120}}>
            <TouchableHighlight
                style={{flex:1,width,height:120}}
                onPress={() => 
                    Linking.openURL(props.href).catch(err => console.error('An error occurred', err))
                }
            >
                <Image
                    source={{uri:props.image}}
                    style={{flex:1,width,height:120,resizeMode:'contain'}} 
                />
            </TouchableHighlight>
        </View>
    } else{
        return <View style={{flex:1, justifyContent:'center',width,height:120}}>
            <Image
                source={{uri:props.image}}
                style={{flex:1,width,height:120,resizeMode:'contain'}} 
            />
        </View>
    }
}
export default class Slider extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    componentWillMount(){
        return fetch('http://citasveterinarias.com/api/slider')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.Slider,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
        return(
          <View style={{flex: 1, paddingTop:20,width}}>
            <Swiper
                autoplay
                autoplayTimeout={3}
                height={120}
            >
                {
                    this.state.dataSource.map((item, i) =>
                        <Slide
                            image={item.image}
                            href={item.href}
                            key={i}
                        />
                    )
                }
            </Swiper>
          </View>
        );
      }
}