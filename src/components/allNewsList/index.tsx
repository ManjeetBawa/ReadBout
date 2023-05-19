import styles from "./style";
import React from 'react';
import {View, Text, Image} from 'react-native';
import { format } from "date-fns";
import { defaultImage } from "../../constants/strings";
import { dateFormat } from "../../constants/strings";

interface AllNewsList {
    item: any;
    date: any;
    DateAndAuth: boolean;
}
const AllNewsList = ({item,date,DateAndAuth}:AllNewsList) => {
    return (
    <View>
        <Image
            style={styles.image}
            source={{
              uri: item.urlToImage
                ? item.urlToImage
                : defaultImage,
            }}
          />
          <Text style={styles.bottomText}>
            {item.title ? item.title : null}
          </Text>
          {DateAndAuth&&(<View style={styles.authNdate}>
            <Text style={styles.DateText}>
              {item.author ? item.author : null}
            </Text>
            <Text style={styles.DateText}>
              {item.publishedAt ? format(date, dateFormat) : null}
            </Text>
          </View>)}
          
    </View>
    )
};


export default AllNewsList;
