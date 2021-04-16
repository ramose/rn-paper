import React, {useState} from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements'
import { Title, IconButton, Colors } from 'react-native-paper'
import PropTypes from 'prop-types'

const CustomBottomSheet = (props) => {
    const [title, setTitle] = useState('')

    const updateType = (type) => {
        // setTitle(type)
        props.onSelect(type)
    }

    return(
        <BottomSheet
            isVisible={props.show}
            containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
              }}>
              <Title>{props.title}</Title>
              <View style={{flex: 1}} />
              <IconButton
                icon="close"
                color={Colors.red500}
                onPress={props.onPressClose}
              />
            </View>

            <ScrollView>
              {props.items.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <TouchableOpacity
                    >
                    <ListItem.Content>
                      <ListItem.Title style={l.titleStyle} onPress={()=>updateType(l.title)}>
                        {l.title}
                      </ListItem.Title>
                    </ListItem.Content>
                  </TouchableOpacity>
                </ListItem>
              ))}
            </ScrollView>
          </BottomSheet>
    )
}

export default CustomBottomSheet

CustomBottomSheet.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    items: PropTypes.object,
    onSelect: PropTypes.func,
    onPressClose: PropTypes.func
}
