import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';

const PopularProducts = ({post}) => {
    return (
            <View style={styles.container}>
                <Divider width={1} orientation='vertical'/>
                <PostImage post={post}/>
                <PostFooter post={post}/>
            </View>
    );
}

const PostImage = ({post}) => (
    <View style={{width:'100%', height: 450}}>
        <Image 
            source={{uri: post.imageUrl}}
            style={{height: '100%', resizeMode: 'cover'}}
        />
    </View>
) 

const PostFooter = ({post}) => (
    <View>
        <Text style={styles.postTitle}>{post.product}</Text>
        <Text style={styles.postCaption}>{post.caption}</Text>
        <Text style={styles.postPrize}>{post.prize}</Text>
    </View>
) 



const styles = StyleSheet.create({
    container:{
        marginBottom: 40,
    },
    titlePP:{
        margin: 18,
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
        color: 'green',
    },
    postCaption: {
        fontSize: 15,
        marginLeft: 10,
    },
    postPrize: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})


export default PopularProducts;