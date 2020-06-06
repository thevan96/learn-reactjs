import React from 'react';

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

const widthWindow = Dimensions.get('window').width;

export default class ScrollViewComponent extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}
        keyboardDismissMode="on-drag"
      >
        <Image
          source={require('../assets/3457f76c7aee4797dee7ad4e7116ee950f238760.png')}
          style={styles.image}
        />
        <Text style={styles.content}>
          Adipisicing non nemo cupiditate aliquid nesciunt libero. Magnam
          repudiandae sed doloremque quam earum Placeat incidunt voluptate
          laborum quae suscipit Non tempore laboriosam esse expedita ipsa
          Cupiditate aliquid cupiditate temporibus iure laudantium Consequatur
          ut quia porro adipisicing quam Eaque rem illum cumque animi
          perferendis quibusdam In aliquid nostrum rerum vel id? Ab aspernatur
          officiis voluptatem exercitationem error Quibusdam autem vero dolor
          ullam dolore? Libero dolore aperiam nulla tempore hic. Natus doloribus
          reprehenderit animi vel nesciunt natus illum, assumenda Fugiat ipsam
          laboriosam saepe reprehenderit dolore Sed cumque molestiae et iusto
          voluptatum Recusandae laboriosam aperiam ut repudiandae dolores! Sequi
          rerum obcaecati quisquam quo illo Exercitationem dolores perspiciatis
          hic officia cumque Accusamus nihil maxime labore neque ipsa a.
          Provident cum labore amet cum ut labore officiis. In odio dolor
          excepturi sunt pariatur Quidem illo error saepe nemo cum error, optio
          accusantium praesentium? Aliquam odio sit molestiae deleniti atque
          Itaque voluptas voluptatibus quod iusto aperiam? Beatae minus sequi
          architecto veritatis impedit? Praesentium dolor iste tenetur
          voluptatum eveniet quis aut Perferendis nam exercitationem neque vel
          repellat! Voluptas commodi aut doloremque consectetur a? Possimus
          nihil quaerat eveniet quis maiores. Accusamus nisi ex alias deleniti
          quae quam quia. Veritatis accusamus adipisci sed veniam quod et. Quo
          incidunt vel illum consectetur modi Dolorum placeat accusamus dicta
          voluptatum possimus? Delectus earum amet et nostrum accusamus. Qui rem
          eius officia non tempore. Deleniti commodi saepe perferendis
          consequatur earum? Vero sed alias tempore ad voluptates Temporibus
          dolore reprehenderit aspernatur ea suscipit Aspernatur autem maiores
          vitae beatae perspiciatis Voluptates quae libero cumque animi
          laudantium Dolor eaque ad expedita magnam a Aperiam labore
          exercitationem dignissimos qui laborum Voluptatibus cum vitae qui
          atque itaque Corrupti perspiciatis aliquid libero quod alias Atque
          laudantium dolorum eveniet illo autem? Delectus voluptatem optio
          pariatur ipsa ex earum Reprehenderit incidunt perspiciatis tempora
          maiores ipsam ad labore. Amet itaque quis magni.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ...."
          placeholderTextColor="white"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3437',
  },
  image: {
    width: widthWindow,
    height: widthWindow * (1392 / 1300),
  },
  content: {
    fontSize: 30,
    color: '#EAEBEB',
  },
  input: {
    height: 100,
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 20,
    borderWidth: 1
  }
});
