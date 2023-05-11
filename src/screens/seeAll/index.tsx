import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { useQuery } from 'react-query';
import axios from 'axios';

const SeeAll = () => {
    // const { isLoading, error, data,refetch } = useQuery('SeeAll', async () => {
    //     const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_215686145672e60b566d0c3ba3bc5e247b59e&country=in');
    //     console.log(response.data.results)
    //     return response.data;
    //   });
    //   console.log(data);

    return (
        <Text>See all section</Text>
    )
}
export default SeeAll;
