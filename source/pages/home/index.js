import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getDataThunk} from '../../reducers/app';
import ItemComponent from './itemComponent';
import {PreloadAPP} from '../../preloader';

const Home = (props) => {
    return (
        <View style={styles.container}>
            {/*RenderProps*/}
            <FlatList data={props.data} keyExtractor={(item) => item.id}
                      renderItem={({item}) => (
                          <ItemComponent navigation={props.navigation} urls={item.urls}
                                         description={item.description} altDescription={item.alt_description}
                                         name={item.user.name}/>
                      )}/>
        </View>
    );
};
//HOC
const SetDataHOC = (Component) => {
    class SetDataComponent extends React.Component {
        componentDidMount() {
            this.props.getDataThunk()
        }
        render() {
            if (!this.props.initialized) {
                return <PreloadAPP/>
            }
            return (
                <Component initialized={this.props.initialized} data={this.props.data}
                           navigation={this.props.navigation}/>
            )
        }
    }
    let ConnectSetDataComponent = connect(mapStateToProps)(SetDataComponent);
    return ConnectSetDataComponent;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#f5f5f5'
    }
});

const mapStateToProps = state => {
    return {
        data: state.app.data,
        initialized: state.app.initialized
    }
};

const mapDispatchToProps = {
    getDataThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(SetDataHOC(Home));
