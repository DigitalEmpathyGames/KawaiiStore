import {
    Text,
    View,
  } from 'react-native';

type itemStock = {
  id:string;
  name:string;
  price:number;
  quantity:number;
}

const Stock = ({ navigation }:any) :JSX.Element => {

    const drawItem = (item :itemStock):JSX.Element => {
      return (
        <>
        <View
          style={{
            backgroundColor:'black',
            width:'90%',
            height:'10%',
            flexDirection:'row',
            borderColor:'black',
            borderWidth:2
          }}
        >
          <View
            style={{
              flex:1,
              backgroundColor:'white'
            }}
          >

          </View>
          <View
            style={{
              flex:3,
              backgroundColor:'magenta',flexDirection:'column'
            }}
          >
            <View
              style={{
                flex:2,
                borderColor:'black',
                borderWidth:2
              }}
            >

            </View>
            <View
              style={{
                flex:1,
                borderColor:'black',
                borderWidth:2,
                flexDirection:'row'
              }}
            >
                <View
                  style={{
                    flex:1,
                    borderColor:'black',
                    borderWidth:2
                  }}
                >

                </View>
                <View
                  style={{
                    flex:1,
                    borderColor:'black',
                    borderWidth:2
                  }}
                >

                </View>
            </View>
          </View>
          <View
            style={{
              flex:1,
              backgroundColor:'gray'
            }}
          >

          </View>
        </View>
        </>
      )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center',
          backgroundColor:'red'
        }}>
        <View
          style={{
            backgroundColor:'black',
            width:'90%',
            height:'10%',
            flexDirection:'row'
          }}
        >
          <View
            style={{
              flex:1,
              backgroundColor:'white'
            }}
          >

          </View>
          <View
            style={{
              flex:3,
              backgroundColor:'magenta'
            }}
          >

          </View>
          <View
            style={{
              flex:1,
              backgroundColor:'gray'
            }}
          >

          </View>
        </View>
            <View
              style={
                {
                  flex:1,
                  backgroundColor:'green',
                  paddingTop:20
                }
              }
            >
              {drawItem({id:'asdjhgajhsdg',name:'chapitas',price:400,quantity:382})}
            </View>
              

          <Text>
          Stock
          </Text>
        </View>
      );
}

export default Stock;