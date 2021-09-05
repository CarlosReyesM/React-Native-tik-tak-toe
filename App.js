import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';

const App = () => {
  const [matrix, setMatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const handlePress = (i, x) => {
    if (matrix[i][x] || winner) {
      return null;
    }
    const newMatrix = [...matrix];
    newMatrix[i][x] = turn;
    setMatrix(newMatrix);
    const haveWinner = checkWinner();
    if (haveWinner) {
      return setWinner(turn);
    }
    if (turn === 'X') {
      return setTurn('O');
    }
    return setTurn('X');
  };

  const handleRefresh = () => {
    const newMatrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    setMatrix(newMatrix);
    setTurn('X');
    setWinner(null);
  };

  const checkWinner = () => {
    const top =
      matrix[0][0] &&
      matrix[0][0] === matrix[0][1] &&
      matrix[0][1] === matrix[0][2];
    const middle =
      matrix[1][0] &&
      matrix[1][0] === matrix[1][1] &&
      matrix[1][1] === matrix[1][2];
    const bottom =
      matrix[2][0] &&
      matrix[2][0] === matrix[2][1] &&
      matrix[2][1] === matrix[2][2];

    const left =
      matrix[0][0] &&
      matrix[0][0] === matrix[1][0] &&
      matrix[1][0] === matrix[2][0];
    const middleColum =
      matrix[0][1] &&
      matrix[0][1] === matrix[1][1] &&
      matrix[1][1] === matrix[2][1];
    const right =
      matrix[0][2] &&
      matrix[0][2] === matrix[1][2] &&
      matrix[1][2] === matrix[2][2];

    const crossLeft =
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2];
    const crossRight =
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0];

    if (
      top ||
      middle ||
      bottom ||
      left ||
      middleColum ||
      right ||
      crossLeft ||
      crossRight
    ) {
      return true;
    }
    return false;
  };

  return (
    <View style={style.container}>
      {winner && <Text>The Winner is {winner}!!</Text>}
      <View style={style.pressRow}>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(0, 0)}>
          <Text>{matrix[0][0] || 'A'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(0, 1)}>
          <Text>{matrix[0][1] || 'B'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(0, 2)}>
          <Text>{matrix[0][2] || 'C'}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.pressRow}>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(1, 0)}>
          <Text>{matrix[1][0] || 'D'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(1, 1)}>
          <Text>{matrix[1][1] || 'E'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(1, 2)}>
          <Text>{matrix[1][2] || 'F'}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.pressRow}>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(2, 0)}>
          <Text>{matrix[2][0] || 'G'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(2, 1)}>
          <Text>{matrix[2][1] || 'H'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.pressContainer}
          onPress={() => handlePress(2, 2)}>
          <Text>{matrix[2][2] || 'I'}</Text>
        </TouchableOpacity>
      </View>
      <Button title="Refresh" color="#4a4a4a" onPress={handleRefresh} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64a345',
  },
  pressContainer: {
    display: 'flex',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    padding: 10,
    backgroundColor: 'azure',
    borderWidth: 1,
    borderColor: '#4a4a4a',
  },
  pressRow: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
