import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { useQuery } from 'react-query';
import axios from 'axios';

const SeeAll = () => {
    const { isLoading, error, data,refetch } = useQuery('SeeAll', async () => {
        const response = await axios.get('https://newsapi.org/v2/everything&apiKey=a2f0f00c594e483a8b69a5db16b329da');
        // console.log(response.data)
        return response.data;
      });
    //   console.log(data);

    return (
        <Text>See all section</Text>
    )
}
export default SeeAll;
