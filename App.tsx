/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  // Text,
  useColorScheme,
  View,
} from 'react-native';



import { Button,Text,TextArea,Accordion,createIcon, getColor,Checkbox ,ActionSheet } from '@carbon/react-native';
import AddIcon from '@carbon/icons/es/add/20';
import CaretRightIcon from '@carbon/icons/es/caret--right/20';
import ArrowLeftIcon from '@carbon/icons/es/arrow--left/20';
import CodeIcon from '@carbon/icons/es/code/20';
import FavoriteIcon from '@carbon/icons/es/favorite/20';

   

function App(): React.JSX.Element {
 
  return (
    <> 
      <Button text="My Button" onPress={() => { } } />
      <Text text='hello' style={{color:'red'}} type='heading-compact-01' /> 
        <TextArea placeholder="Enter your text here"  style={{backgroundcolor:'red', padding:20}}/>
        <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container} style={styles.view}>
        <Accordion title="I am first. You can open me." firstAccordion={false}>
          <Text text="I am the content of this accordion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Accordion>
        <Accordion title="I am disabled" disabled={false}>
          <Text text="I am the content of this accordion" />
        </Accordion>
        <Accordion title="I am already opened on load and have long text" open={false}>
          <Text text="I am the content of this accordion" />
          <Button text="Click me to toggle the one below" onPress={() => this.setState({ openControl: !openControl })} style={styles.itemStyle} />
        </Accordion>
        <Accordion title="I can be controlled and have long text ellipsis" textBreakMode="tail">
          <Text type={'body-01'} text="Smaller text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Accordion>

          <View style={{ backgroundColor:'pink',justifyContent: 'center',
           alignItems: 'center',}}>{createIcon(AddIcon, 32, 32)}</View>
        <View style={styles.itemStyless}>{createIcon(CaretRightIcon, 32, 32, getColor('interactive'))}</View>
        <View style={styles.itemStyless}>{createIcon(ArrowLeftIcon, 20, 20, getColor('supportError'))}</View>
        <View style={styles.itemStyless}>{createIcon(CodeIcon, 16, 16, getColor('supportSuccess'))}</View>
        <View style={styles.itemStyless}>{createIcon(FavoriteIcon, 32, 32, getColor('supportWarning'))}</View>

         <Checkbox id="subtext" onPress={()=>{}} label="Show body" />
        <Checkbox  id="force" onPress={()=>{}} label="Force custom action sheeet" />
        <Checkbox id="lot"  onPress={()=>{}} label="Load lots of items" />
        <Checkbox  id="dangerItem"  onPress={()=>{}} label="Add danger item" />
        <Checkbox  id="imageSupport" onPress={()=>{}} label="Render images for custom" />
        <Checkbox  id="showDivider" onPress={()=>{}}label="Show divider for custom" />
        <Checkbox  id="fullBleed"  onPress={()=>{}}label="Full bleed for custom" />
        <Button  onPress={()=>{}} text="Open action sheet" style={styles.button} />
        {/* <ActionSheet open={true} title="Action sheet title"  cancelButtonIndex={0}    /> */}
      </ScrollView>
  
     </>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 0,
    paddingTop: 32,
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 64,
  },
  testNotFull: {
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  itemStyle: {
    marginTop: 8,
  },
    itemStyless: {
   mariginleft: 20,
   paddingleft:20,
   backgroundColor:'pink'
  },
});



export default App;
